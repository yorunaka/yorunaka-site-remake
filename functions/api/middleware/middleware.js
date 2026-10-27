export function verifyAdmin(request, env) {
  const authHeader = request.headers.get("Authorization");
  const adminSecret = env.ADMIN_SECRET_KEY || "admin123";
  return authHeader === `Bearer ${adminSecret}`;
}