// src/core/domain/Entities.js
  export class PostEntity {
    constructor({ id, title, slug, content, excerpt, status, created_at, createdAt }) {
        // Only assign id if provided (e.g., from database read); leave undefined for new records
        this.id = id ? Number(id) : undefined;
        this.title = title?.trim();
        this.slug = slug || this.generateSlug(this.title);
        this.content = content || '';
        this.excerpt = excerpt || '';
        this.status = status === 'published' ? 'published' : 'draft';
        this.createdAt = createdAt || created_at || new Date().toISOString();

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
    if (!this.title) {
      throw new Error("Domain Error: Post title is required");
    }
  }
}