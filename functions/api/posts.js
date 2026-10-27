import { verifyAdmin } from './middleware/middleware.js';
import { PgPostRepository } from '../core/infrastructures/PgPostRepository.js';
import {
  ListPostsUseCase,
  GetPostBySlugUseCase,
  SavePostUseCase,
  DeletePostUseCase
} from '../core/usecases/PostUseCases.js';

export async function onRequest(context) {
  const { env, request } = context;
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");
  const adminQuery = url.searchParams.get("admin") === "true"; // Explicit query flag for admin calls
  
  const isAdmin = verifyAdmin(request, env);
  const repository = new PgPostRepository(env);

  try {
    // GET Handler
    if (request.method === "GET") {
      // If admin posts/drafts are requested, enforce admin authorization check
      if (adminQuery && !isAdmin) {
        return new Response(JSON.stringify({ error: "Unauthorized access" }), {
          status: 401,
          headers: { "Content-Type": "application/json" }
        });
      }

      if (slug) {
        const useCase = new GetPostBySlugUseCase(repository);
        const post = await useCase.execute(slug, isAdmin);
        return new Response(JSON.stringify(post), { 
          headers: { "Content-Type": "application/json" } 
        });
      }

      const useCase = new ListPostsUseCase(repository);
      const posts = await useCase.execute(isAdmin);
      return new Response(JSON.stringify(posts), { 
        headers: { "Content-Type": "application/json" } 
      });
    }

    // Require Auth for Mutations (POST, PUT, DELETE)
    if (!isAdmin) {
      return new Response(JSON.stringify({ error: "Unauthorized access" }), { 
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    const body = await request.json().catch(() => ({}));

    // POST/PUT Handler
    if (request.method === "POST" || request.method === "PUT") {
      const isUpdate = request.method === "PUT";
      const useCase = new SavePostUseCase(repository);
      const savedPost = await useCase.execute(body, isUpdate);
      return new Response(JSON.stringify({ success: true, post: savedPost }), { 
        status: isUpdate ? 200 : 201,
        headers: { "Content-Type": "application/json" } 
      });
    }

    // DELETE Handler
    if (request.method === "DELETE") {
      const useCase = new DeletePostUseCase(repository);
      await useCase.execute(body.id);
      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 400 });
  }
}