import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Tutorial() {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/courses/${id}`)
      .then((response) => setContent(response.data.content))
      .catch((error) => console.error('Error fetching tutorial:', error));
  }, [id]);

  return (
    <div>
      <h2 className="h3 font-weight-bold mb-3">{id?.toUpperCase()} Tutorial</h2>
      <p className="mb-4">{content || 'Loading...'}</p>
      <div className="bg-secondary-subtle p-3 rounded mb-4">
        <h3 className="h5 font-weight-semibold">Example:</h3>
        <pre className="bg-dark text-white p-2 rounded">
          {id === 'html' && '<h1>Hello World</h1>'}
          {id === 'css' && 'h1 { color: blue; }'}
          {id === 'javascript' && 'console.log("Hello World");'}
          {id === 'sql' && 'SELECT * FROM users;'}
          {id === 'mysql' && 'CREATE TABLE users (id INT, name VARCHAR(50));'}
          {id === 'php' && '<?php echo "Hello World"; ?>'}
          {id === 'python' && 'print("Hello World")'}
          {id === 'c++' && 'cout << "Hello World";'}
        </pre>
      </div>
      <Link to="/editor" className="btn btn-success">Try It Yourself</Link>
    </div>
  );
}

export default Tutorial;