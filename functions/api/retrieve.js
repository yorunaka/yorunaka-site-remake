import knowledge from "./knowledge.js";

const MAX_RESULTS = 3;
const MIN_WORD_LENGTH = 3;

const STOP_WORDS = new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "but",
  "is",
  "are",
  "was",
  "were",
  "am",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "can",
  "could",
  "would",
  "should",
  "will",
  "what",
  "who",
  "when",
  "where",
  "why",
  "how",
  "which",
  "this",
  "that",
  "these",
  "those",
  "you",
  "your",
  "me",
  "my",
  "tell",
  "about",
]);

const CATEGORY_KEYWORDS = {
  project: [
    "project",
    "projects",
    "build",
    "built",
    "make",
    "made",
    "create",
    "created",
    "develop",
    "developed",
    "work",
    "worked",
  ],

  skills: [
    "skill",
    "skills",
    "technology",
    "technologies",
    "tech",
    "stack",
    "programming",
    "language",
    "languages",
    "tool",
    "tools",
  ],

  personal: [
    "about",
    "background",
    "developer",
    "designer",
    "vincent",
  ],
};


// ----------------------------------------
// Normalize a single word
// ----------------------------------------

function normalizeWord(word) {
  let normalized = word
    .toLowerCase()
    .replace(/[^\w]/g, "");

  // Plural / word-form normalization
  if (normalized.endsWith("ies")) {
    normalized = normalized.slice(0, -3) + "y";
  } else if (normalized.endsWith("ing")) {
    normalized = normalized.slice(0, -3);
  } else if (normalized.endsWith("ed")) {
    normalized = normalized.slice(0, -2);
  } else if (
    normalized.endsWith("s") &&
    !normalized.endsWith("ss")
  ) {
    normalized = normalized.slice(0, -1);
  }

  return normalized;
}


// ----------------------------------------
// Convert text into useful words
// ----------------------------------------

function tokenize(text) {
  return text
    .split(/\s+/)
    .map((word) => word.toLowerCase())
    .map((word) => word.replace(/[^\w]/g, ""))
    .filter((word) => word.length >= MIN_WORD_LENGTH)
    .filter((word) => !STOP_WORDS.has(word))
    .map(normalizeWord);
}


// ----------------------------------------
// Calculate Levenshtein distance
// ----------------------------------------

function levenshteinDistance(a, b) {
  const previousRow = Array.from(
    { length: b.length + 1 },
    (_, index) => index
  );

  for (let i = 1; i <= a.length; i++) {
    const currentRow = [i];

    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;

      currentRow[j] = Math.min(
        currentRow[j - 1] + 1,
        previousRow[j] + 1,
        previousRow[j - 1] + cost
      );
    }

    previousRow.splice(
      0,
      previousRow.length,
      ...currentRow
    );
  }

  return previousRow[b.length];
}


// ----------------------------------------
// Calculate similarity between two words
// ----------------------------------------

function getSimilarity(a, b) {
  if (a === b) {
    return 1;
  }

  // Handle words contained inside each other
  if (a.includes(b) || b.includes(a)) {
    return 0.9;
  }

  const maxLength = Math.max(a.length, b.length);

  if (maxLength === 0) {
    return 1;
  }

  const distance = levenshteinDistance(a, b);

  return 1 - distance / maxLength;
}


// ----------------------------------------
// Find the best match for a question word
// ----------------------------------------

function getBestWordMatch(questionWord, documentWords) {
  let bestMatch = 0;

  for (const documentWord of documentWords) {
    const similarity = getSimilarity(
      questionWord,
      documentWord
    );

    bestMatch = Math.max(bestMatch, similarity);
  }

  return bestMatch;
}


// ----------------------------------------
// Determine what category the user is asking about
// ----------------------------------------

function detectCategory(questionWords) {
  for (const [category, keywords] of Object.entries(
    CATEGORY_KEYWORDS
  )) {
    const normalizedKeywords = keywords.map(
      normalizeWord
    );

    const match = questionWords.some((word) =>
      normalizedKeywords.includes(word)
    );

    if (match) {
      return category;
    }
  }

  return null;
}


// ----------------------------------------
// Calculate document relevance
// ----------------------------------------

function scoreDocument(questionWords, document, category) {
  const documentWords = tokenize(document.text);

  let score = 0;

  // Give a strong boost when the document belongs
  // to the category the user is asking about.
  if (
    category &&
    document.category === category
  ) {
    score += 5;
  }

  for (const questionWord of questionWords) {
    const bestMatch = getBestWordMatch(
      questionWord,
      documentWords
    );

    if (bestMatch >= 0.9) {
      score += 3;
    } else if (bestMatch >= 0.75) {
      score += 2;
    } else if (bestMatch >= 0.65) {
      score += 1;
    }
  }

  return score;
}


// ----------------------------------------
// Retrieve the most relevant documents
// ----------------------------------------

export function retrieveRelevantDocuments(question) {
  const questionWords = tokenize(question);

  // Nothing useful to search for
  if (questionWords.length === 0) {
    return [];
  }

  const category = detectCategory(questionWords);

  return knowledge
    .map((document) => ({
      ...document,
      score: scoreDocument(
        questionWords,
        document,
        category
      ),
    }))
    .filter((document) => document.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS);
}