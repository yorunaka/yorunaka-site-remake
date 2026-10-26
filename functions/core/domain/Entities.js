export class PostEntity {
  constructor({ id, title, slug, content, excerpt, status, created_at, updated_at }) {
    this.id = id || crypto.randomUUID();
    this.title = title?.trim();
    this.slug = slug || this.generateSlug(this.title);
    this.content = content || ''; // Fallback to empty string if not selected in query
    this.excerpt = excerpt || '';
    this.status = status === 'published' ? 'published' : 'draft';
    this.createdAt = created_at || new Date().toISOString();
    this.updatedAt = updated_at || new Date().toISOString();

    this.validate();
  }

  generateSlug(title) {
    if (!title) return '';
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  validate() {
    if (!this.title) throw new Error("Domain Error: Post title is required");
  }
}