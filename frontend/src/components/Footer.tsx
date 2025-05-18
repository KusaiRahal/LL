import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-accent">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About LibyaLeaks</h3>
            <p className="text-accent-dark">
              A platform dedicated to exposing truth and fostering transparency in Libya.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore" className="hover:text-accent-dark transition-colors">
                  Explore Stories
                </Link>
              </li>
              <li>
                <Link to="/submit" className="hover:text-accent-dark transition-colors">
                  Submit a Leak
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-accent-dark transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent-dark transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="hover:text-accent-dark transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent-dark transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-accent-dark transition-colors">
                  Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Security Notice */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Security Notice</h3>
            <p className="text-accent-dark">
              For maximum security, we recommend using a VPN or Tor browser when accessing
              LibyaLeaks.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-accent/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-accent-dark">
              © {new Date().getFullYear()} LibyaLeaks. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-accent-dark hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-accent-dark hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 