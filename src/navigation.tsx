import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">HONGYUAN E</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/experience" className="hover:text-gray-600">Experience</Link>
          <Link to="/film-works" className="hover:text-gray-600">Film Works</Link>
          <Link to="/game-works" className="hover:text-gray-600">Game Works</Link>
          <Link to="/contact" className="hover:text-gray-600">Contact</Link>
        </div>
        <button className="md:hidden">Menu</button>
      </div>
    </nav>
  );
};

export default Navigation;