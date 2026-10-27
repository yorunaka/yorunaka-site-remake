import { IPostRepository } from '../domain/Repositories.js';
import { PostEntity } from '../domain/Entities.js';
import { getPostgresClient } from './PostgresClient.js';

export class PgPostRepository extends IPostRepository {
  constructor(env) {
    super();
    this.env = env;
  }

  async getAll(isAdmin) {
    const client = getPostgresClient(this.env);
    await client.connect();
    try {
      const sql = isAdmin
        ? 'SELECT * FROM posts ORDER BY created_at DESC'
        : "SELECT id, title, slug, excerpt, created_at FROM posts WHERE status = 'published' ORDER BY created_at DESC";
      
      const res = await client.query(sql);
      return res.rows.map((row) => new PostEntity(row));
    } finally {
      await client.end();
    }
  }

  async getBySlug(slug) {
    const client = getPostgresClient(this.env);
    await client.connect();
    try {
      const res = await client.query('SELECT * FROM posts WHERE slug = $1', [slug]);
      return res.rows[0] ? new PostEntity(res.rows[0]) : null;
    } finally {
      await client.end();
    }
  }

  async create(post) {
    const client = getPostgresClient(this.env);
    await client.connect();
    try {
      const queryStr = `
        INSERT INTO posts (title, slug, content, excerpt, status)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`;
      
      const values = [post.title, post.slug, post.content, post.excerpt, post.status];
      const res = await client.query(queryStr, values);
      return new PostEntity(res.rows[0]);
    } finally {
      await client.end();
    }
  }

  async update(post) {
    const client = getPostgresClient(this.env);
    await client.connect();
    try {
      const queryStr = `
        UPDATE posts
        SET title = $1, slug = $2, content = $3, excerpt = $4, status = $5, updated_at = CURRENT_TIMESTAMP
        WHERE id = $6
        RETURNING *`;
        
      const values = [post.title, post.slug, post.content, post.excerpt, post.status, Number(post.id)];
      const res = await client.query(queryStr, values);
      return new PostEntity(res.rows[0]);
    } finally {
      await client.end();
    }
  }

  async delete(id) {
    const client = getPostgresClient(this.env);
    await client.connect();
    try {
      await client.query('DELETE FROM posts WHERE id = $1', [Number(id)]);
      return true;
    } finally {
      await client.end();
    }
  }
}