CREATE DATABASE e_learning_db;
USE e_learning_db;

CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL
);

INSERT INTO courses (title, content) VALUES
('HTML Tutorial', 'Learn HTML basics.'),
('CSS Tutorial', 'Master CSS styling.'),
('JavaScript Tutorial', 'Explore JS programming.');