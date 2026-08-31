import { GoogleGenAI } from "@google/genai";
import { retrieveRelevantDocuments } from "./retrieve.js";

// test
// export async function onRequestPost(context) {
//   try {
//     const { message } = await context.request.json();

//     const documents = retrieveRelevantDocuments(message);

//     console.log("QUESTION:", message);
//     console.log("DOCUMENTS:", documents);

//     return Response.json({
//       question: message,
//       documents,
//     });
//   } catch (error) {
//     console.error("RAG ERROR:", error);

//     return Response.json(
//       {
//         error: error.message,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

export async function onRequestPost(context) {

   try {
    // Get request body
    const { message } = await context.request.json();

    if (!message) {
      return Response.json(
        {
          error: "Message is required",
        },
        {
          status: 400,
        }
      );
    }

    // Retrieve relevant portfolio information
    const documents = retrieveRelevantDocuments(message);

    const portfolioContext = documents
      .map((document) => document.text)
      .join("\n\n");


    const prompt = `
                    You are Vincent's personal portfolio assistant.

                    Answer the user's question using ONLY the
                    portfolio information provided below.

                    RULES:

                    - Never invent information.
                    - Never assume personal information.
                    - Never make up projects or skills.
                    - If the answer isn't available, say:
                    "I don't have that information in my portfolio knowledge."
                    - Keep your response concise.
                    - Be friendly and natural.

                    PORTFOLIO INFORMATION:

                    ${context}

                    USER QUESTION:

                    ${message}
                    `;

    const ai = new GoogleGenAI({
      apiKey: context.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    return Response.json({
      answer: response.text,
    });

  } catch (error) {
  console.error("CHAT ERROR:", error);

  return Response.json(
    {
      error: error.message || String(error),
    },
    {
      status: 500,
    }
  );
}

  // } catch (error) {
  //   console.error(error);

  //   return Response.json(
  //     {
  //       error: "Something went wrong",
  //     },
  //     {
  //       status: 500,
  //     }
  //   );
  // }
}