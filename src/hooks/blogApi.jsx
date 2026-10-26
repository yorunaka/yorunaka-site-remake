const BASE_URL = '/api/posts';

export const adminApi = {
  // Fetch all posts (published & drafts)
  getPosts: async (token) => {
    const res = await fetch(BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    if (!res.ok) throw new Error('Unauthorized or request failed');
    return data = await res.json();
  },

  // Save (Create or Update) a post
  savePost: async (token, postData, status) => {
    const isUpdate = Boolean(postData.id);
    const method = isUpdate ? 'PUT' : 'POST';

    const res = await fetch(BASE_URL, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ ...postData, status })
    });

    if (!res.ok) throw new Error('Failed to save post');
    return await res.json();
  },

  // Delete a post
  deletePost: async (token, id) => {
    const res = await fetch(`${BASE_URL}?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ id })
    });

    if (!res.ok) throw new Error('Failed to delete post');
    return await res.json();
  }
};