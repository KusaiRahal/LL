import React from 'react';
import { useParams } from 'react-router-dom';

const Story: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-custom p-8">
        <h1 className="text-4xl font-bold text-primary mb-6">Story Details</h1>
        <div className="prose max-w-none">
          {/* Story content will be populated dynamically */}
          <p className="text-text-light">Loading story {id}...</p>
        </div>
      </div>
    </div>
  );
};

export default Story; 