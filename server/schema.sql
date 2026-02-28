-- schema.sql
DROP TABLE IF EXISTS bookmarks;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  name       VARCHAR(255) NOT NULL,
  email      VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  password   VARCHAR(255) NOT NULL
);

CREATE TABLE bookmarks (
  id         SERIAL PRIMARY KEY,
  user_id    INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  url        VARCHAR(2048) NOT NULL,
  title      VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email)
VALUES 
  ('Alice', 'alice@example.com'),
  ('Bob', 'bob@example.com');

INSERT INTO bookmarks (user_id, url, title)
VALUES (1, 'https://example.com', 'Example Site');

SELECT u.name, b.url, b.title
FROM bookmarks b
JOIN users u ON b.user_id = u.id;