import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const Leaks: React.FC = () => {
  const calculateAverageRating = (ratings: { rating: number }[]) => {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, curr) => acc + curr.rating, 0);
    return Math.round(sum / ratings.length);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Latest Leaks</h1>
      
      <div className="space-y-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-custom p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Link to={`/story/${article.id}`} className="block">
                  <h2 className="text-2xl font-bold text-primary mb-2 hover:text-primary-light transition-colors">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-text-light mb-4">
                  {article.content}
                </p>
                <div className="flex items-center text-sm text-text-lighter">
                  <span>{formatDate(article.date)}</span>
                  <span className="mx-2">•</span>
                  <span>{article.sources.length} sources</span>
                  <span className="mx-2">•</span>
                  <span>Rating: {calculateAverageRating(article.sources)}/10</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h3 className="text-sm font-medium text-text-light mb-2">Sources:</h3>
              <div className="flex flex-wrap gap-2">
                {article.sources.map((source, index) => (
                  <span
                    key={`${source.name}-${index}`}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100"
                  >
                    {source.name}
                    <span className="ml-1 text-primary">+{source.rating}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaks; 