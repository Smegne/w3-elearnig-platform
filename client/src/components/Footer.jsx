import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-3 mt-auto">
      <p>&copy; {new Date().getFullYear()} E-Learning Platform. All rights reserved.</p>
      <p>
        <a href="/about" className="text-white mx-2">About</a> | 
        <a href="/contact" className="text-white mx-2">Contact</a> | 
        <a href="/privacy" className="text-white mx-2">Privacy Policy</a>
      </p>
    </footer>
  );
}

export default Footer;