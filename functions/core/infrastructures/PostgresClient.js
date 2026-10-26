import { Client } from '@neondatabase/serverless';

export function getPostgresClient(env) {
  const connectionString = env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is missing");
  }
  return new Client(connectionString);
}