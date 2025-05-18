import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-primary mb-6">
          Welcome to LibyaLeaks
        </h1>
        <p className="text-2xl text-text-light mb-12 max-w-3xl mx-auto">
          A platform dedicated to exposing truth and fostering transparency in Libya
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/leaks"
            className="bg-primary text-accent px-8 py-3 rounded-lg hover:bg-primary-light transition-colors text-lg font-medium"
          >
            View Leaks
          </Link>
          <Link
            to="/submit"
            className="bg-secondary text-accent px-8 py-3 rounded-lg hover:bg-secondary-light transition-colors text-lg font-medium"
          >
            Submit Leak
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <div className="bg-white p-8 rounded-lg shadow-custom transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
          <div className="h-1 w-20 bg-primary mb-6"></div>
          <p className="text-text-light text-lg leading-relaxed">
            To provide a secure and anonymous platform for whistleblowers and journalists,
            empowering them to expose corruption and injustice in Libya.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-custom transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold text-primary mb-4">Latest Updates</h2>
          <div className="h-1 w-20 bg-primary mb-6"></div>
          <p className="text-text-light text-lg leading-relaxed">
            Stay informed about the latest exposés and reports affecting Libya's
            political, social, and economic landscape.
          </p>
        </div>
      </div>

      <div className="text-center mt-16 mb-12">
        <blockquote className="text-2xl italic text-text-light">
          "The spirit of resistance can never be extinguished by threats or bullets."
          <footer className="text-text-lighter mt-2">— Omar Al-Mukhtar</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Home; 