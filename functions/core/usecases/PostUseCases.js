import { PostEntity } from '../domain/Entities.js';

export class ListPostsUseCase {
  constructor(postRepository) {
    this.postRepo = postRepository;
  }

  async execute(isAdmin = false) {
    return await this.postRepo.getAll(isAdmin);
  }
}

export class GetPostBySlugUseCase {
  constructor(postRepository) {
    this.postRepo = postRepository;
  }

  async execute(slug, isAdmin = false) {
    const post = await this.postRepo.getBySlug(slug);
    
    if (!post) throw new Error("Post not found");
    if (post.status === 'draft' && !isAdmin) {
      throw new Error("Unauthorized to access draft post");
    }

    // Only increment views if post exists and user has rights to view it
    return post;
  }
}

export class SavePostUseCase {
  constructor(postRepository) {
    this.postRepo = postRepository;
  }

  async execute(postData, isUpdate = false) {
    const cleanData = { ...postData };

    // If creating a new post, remove empty/null id so PostEntity generates a UUID
    if (!isUpdate || !cleanData.id) {
      delete cleanData.id;
    }

    const postEntity = new PostEntity(cleanData);

    if (isUpdate) {
      if (!postData.id) throw new Error("Post ID is required for updates");
      return await this.postRepo.update(postEntity);
    }
    return await this.postRepo.create(postEntity);
  }
}

export class DeletePostUseCase {
  constructor(postRepository) {
    this.postRepo = postRepository;
  }

  async execute(id) {
    if (!id) throw new Error("Post ID required for deletion");
    return await this.postRepo.delete(id);
  }
}