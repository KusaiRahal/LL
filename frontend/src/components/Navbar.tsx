import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10">
              {/* Simple Libya silhouette SVG */}
              <svg viewBox="0 0 200 200" className="fill-accent">
                <path d="M100,20 L160,40 L180,100 L160,160 L100,180 L40,160 L20,100 L40,40 Z" />
                <circle cx="100" cy="190" r="4" />
              </svg>
            </div>
            <span className="text-accent text-2xl font-bold tracking-tight">
              LibyaLeaks
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-accent hover:text-accent-dark"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/leaks" className="text-accent hover:text-accent-dark transition-colors text-lg">
              Latest Leaks
            </Link>
            <Link to="/explore" className="text-accent hover:text-accent-dark transition-colors text-lg">
              Explore
            </Link>
            <Link to="/categories" className="text-accent hover:text-accent-dark transition-colors text-lg">
              Categories
            </Link>
            <Link to="/about" className="text-accent hover:text-accent-dark transition-colors text-lg">
              About
            </Link>
            <Link to="/auth" className="text-accent hover:text-accent-dark transition-colors text-lg">
              Login
            </Link>
            <Link
              to="/submit"
              className="bg-accent text-primary px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors text-lg font-medium"
            >
              Submit Leak
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-6`}>
          <div className="flex flex-col space-y-4">
            <Link
              to="/leaks"
              className="text-accent hover:text-accent-dark transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Latest Leaks
            </Link>
            <Link
              to="/explore"
              className="text-accent hover:text-accent-dark transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              to="/categories"
              className="text-accent hover:text-accent-dark transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="text-accent hover:text-accent-dark transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/auth"
              className="text-accent hover:text-accent-dark transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/submit"
              className="bg-accent text-primary px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors text-lg font-medium inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Leak
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 