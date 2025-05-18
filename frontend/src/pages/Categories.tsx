import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  count: number;
}

const Categories: React.FC = () => {
  const categories: Category[] = [
    {
      id: 'government',
      title: 'Government & Corruption',
      description: 'Exposing misconduct, fraud, and corruption within government institutions.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
        </svg>
      ),
      count: 156
    },
    {
      id: 'armed-groups',
      title: 'Armed Groups',
      description: 'Information about militia activities, conflicts, and security concerns.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      count: 89
    },
    {
      id: 'foreign-affairs',
      title: 'Foreign Affairs',
      description: 'International relations, diplomatic cables, and foreign intervention.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
        </svg>
      ),
      count: 124
    },
    {
      id: 'resources',
      title: 'Natural Resources',
      description: 'Oil, gas, and natural resource management and exploitation.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      ),
      count: 78
    },
    {
      id: 'human-rights',
      title: 'Human Rights',
      description: 'Human rights violations, abuses, and humanitarian concerns.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ),
      count: 203
    },
    {
      id: 'corporate',
      title: 'Corporate Misconduct',
      description: 'Business corruption, fraud, and corporate malpractice.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1v2h-1v-2zm1-2V7h-1v2h1zM5 7v2h1V7H5zm1 4H5v2h1v-2z" clipRule="evenodd" />
        </svg>
      ),
      count: 67
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Categories</h1>
        <p className="text-xl text-text-light max-w-3xl mx-auto">
          Explore stories by category. From oil fields to foreign intervention—every detail matters.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/explore?category=${category.id}`}
            className="group"
          >
            <div className="bg-white p-8 rounded-lg shadow-custom hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="text-primary group-hover:text-primary-light transition-colors">
                  {category.icon}
                </div>
                <span className="bg-secondary-light text-accent px-3 py-1 rounded-full text-sm">
                  {category.count} stories
                </span>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                {category.title}
              </h2>
              <p className="text-text-light">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories; 