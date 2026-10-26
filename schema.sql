-- PostgreSQL Migration Script
CREATE TABLE IF NOT EXISTS site_analytics (
  key VARCHAR(50) PRIMARY KEY,
  value BIGINT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  status VARCHAR(20) CHECK (status IN ('draft', 'published')) DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Seed initial counter row
INSERT INTO site_analytics (key, value)
VALUES ('total_visitors', 0)
ON CONFLICT (key) DO NOTHING;