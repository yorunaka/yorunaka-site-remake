// src/core/domain/Entities.js
  export class PostEntity {
    constructor({ id, title, slug, content, excerpt, status, created_at, createdAt }) {
      this.id = id;
      this.title = title;
      this.slug = slug;
      this.content = content || '';
      this.excerpt = excerpt || '';
      this.status = status;
      // Ensure both camelCase and snake_case inputs resolve correctly:
      this.createdAt = createdAt || created_at || new Date().toISOString();
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