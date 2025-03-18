const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'e_learning_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.get('/api/courses', (req, res) => {
  const sql = 'SELECT * FROM courses';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/courses/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM courses WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    const mockContent = {
      html: 'Learn HTML to structure web content.',
      css: 'Style your pages with CSS.',
      javascript: 'Add interactivity with JavaScript.',
      php: 'Build dynamic websites with PHP.',
      sql: 'Master SQL for database management.',
      react: 'Build modern UIs with React.',
      mysql: 'Learn MySQL, a popular relational database.',
      'node.js': 'Build server-side applications with Node.js.',
      'c++': 'Master C++ for high-performance programming.',
      python: 'Learn Python for versatile programming.',
      java: 'Master Java for robust applications.',
    };
    res.json({ content: mockContent[id.toLowerCase()] || 'Course not found' });
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));