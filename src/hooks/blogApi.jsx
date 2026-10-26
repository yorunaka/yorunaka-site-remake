// Use relative pathing so it works in both local dev and Cloudflare deployment
const BASE_URL = '/api/posts';

const getPost = async (token = null) => {
const headers = { 'Content-Type': 'application/json' };

  // ONLY add Authorization if token is a valid non-empty string
  if (token && token !== 'undefined' && token !== 'null') {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // If token is provided, append admin=true to list drafts as well
  const url = token ? `${BASE_URL}?admin=true` : BASE_URL;

  const res = await fetch(url, { headers });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  const data = await res.json();
  return Array.isArray(data) ? data : [];
};

const savePost = async (token, postData, status) => {
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

  if (!res.ok) {
    throw new Error('Failed to save post');
  }

  return await res.json();
};

const deletePost = async (token, id) => {
  const res = await fetch(BASE_URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ id })
  });

  if (!res.ok) {
    throw new Error('Failed to delete post');
  }

  return await res.json();
};

export default {
  getPost,
  savePost,
  deletePost
};