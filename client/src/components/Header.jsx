import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Header({ onToggleSidebar }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const scrollRef = useRef(null);

  const tutorials = [
    'HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'Java', 'PHP', 'How To', 'W3.CSS',
    'C', 'C++', 'C#', 'Bootstrap', 'React', 'MySQL', 'jQuery', 'Excel', 'XML',
    'Django', 'NumPy', 'Pandas', 'Node.js'
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`navbar navbar-expand-lg sticky-top shadow-sm py-3 ${
          isDarkMode ? 'bg-dark text-white' : 'bg-white text-dark'
        }`}
      >
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center">
            <Link to="/" className="navbar-brand d-flex align-items-center me-4">
              <span className="fs-4 fw-bold">📚 ELearn</span>
            </Link>
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item mx-2">
                <Link to="/tutorials" className="nav-link">Tutorials</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/certificates" className="nav-link">Certificates</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto" style={{ maxWidth: '400px' }}>
            <input
              type="text"
              className={`form-control rounded-pill ${
                isDarkMode ? 'bg-secondary text-white border-secondary' : 'bg-light text-dark'
              }`}
              placeholder="Search tutorials, courses, and more..."
            />
          </div>
          <div className="d-flex align-items-center">
            <button
              onClick={toggleDarkMode}
              className="btn btn-outline-secondary rounded-circle mx-2"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <Link to="/signup" className="btn btn-success mx-2">Sign Up</Link>
            <Link
              to="/signin"
              className={`btn btn-outline-${isDarkMode ? 'light' : 'dark'} mx-2`}
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`py-2 shadow-sm ${
          isDarkMode ? 'bg-secondary text-white' : 'bg-light text-dark'
        }`}
      >
        <div className="container-fluid px-4 d-flex align-items-center">
          <button onClick={scrollLeft} className="btn btn-outline-secondary me-2">
            &lt;
          </button>
          <div
            ref={scrollRef}
            className="d-flex flex-nowrap overflow-x-auto scroll-smooth"
            style={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}
          >
            {tutorials.map((tutorial, index) => (
              <Link
                key={index}
                to={`/tutorial/${tutorial.toLowerCase()}`}
                className={`nav-link mx-2 px-3 py-1 rounded ${
                  isDarkMode ? 'text-white hover:bg-gray-700' : 'text-dark hover:bg-gray-200'
                }`}
                onClick={
                  ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'React', 'MySQL', 'Node.js', 'C++', 'Python', 'Java', 'Bootstrap', 'jQuery'].includes(tutorial)
                    ? () => onToggleSidebar(tutorial)
                    : null
                }
              >
                {tutorial}
              </Link>
            ))}
          </div>
          <button onClick={scrollRight} className="btn btn-outline-secondary ms-2">
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;