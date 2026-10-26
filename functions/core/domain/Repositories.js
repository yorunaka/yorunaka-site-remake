
export class IPostRepository {
  async getAll(isAdmin) { throw new Error("Not implemented"); }
  async getBySlug(slug) { throw new Error("Not implemented"); }
  async create(postEntity) { throw new Error("Not implemented"); }
  async update(postEntity) { throw new Error("Not implemented"); }
  async delete(id) { throw new Error("Not implemented"); }
}