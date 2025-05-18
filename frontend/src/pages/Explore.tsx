import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Filter {
  category: string;
  date: string;
  sort: string;
}

const Explore: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Filter>({
    category: 'all',
    date: 'newest',
    sort: 'relevance'
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Explore Stories</h1>
        <p className="text-xl text-text-light max-w-3xl mx-auto">
          Browse verified exposés and leaks shared by citizens, whistleblowers, and
          independent journalists.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-custom mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-grow">
            <input
              type="text"
              placeholder="What do you want to uncover?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="government">Government & Corruption</option>
              <option value="armed-groups">Armed Groups</option>
              <option value="foreign-affairs">Foreign Affairs</option>
              <option value="resources">Natural Resources</option>
              <option value="human-rights">Human Rights</option>
              <option value="corporate">Corporate Misconduct</option>
            </select>

            <select
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>

            <select
              value={filters.sort}
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
              className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="relevance">Most Relevant</option>
              <option value="views">Most Viewed</option>
              <option value="comments">Most Discussed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sample Story Card */}
        <Link to="/story/1" className="group">
          <div className="bg-white rounded-lg shadow-custom overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-secondary-light text-accent px-3 py-1 rounded-full text-sm">
                  Government & Corruption
                </span>
                <span className="text-text-lighter text-sm">2 days ago</span>
              </div>
              <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                Sample Investigation Title
              </h2>
              <p className="text-text-light mb-4 line-clamp-3">
                A brief preview of the investigation or leak. This text will be truncated
                after three lines to maintain consistent card heights...
              </p>
              <div className="flex items-center justify-between text-text-lighter text-sm">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  1.2K views
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  45 comments
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-primary text-accent px-8 py-3 rounded-lg hover:bg-primary-light transition-colors text-lg font-medium">
          Load More Stories
        </button>
      </div>
    </div>
  );
};

export default Explore; 