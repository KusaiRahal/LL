import React, { useState } from 'react';

const Submit: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    source: '',
    tags: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement submission to backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white p-8 rounded-lg shadow-custom mt-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Submit a Leak</h1>
        <div className="h-1 w-20 bg-primary mb-8"></div>
        
        <p className="text-text-light mb-8 text-lg">
          Your privacy and security are our top priorities. All submissions are encrypted
          and anonymous by default.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-text mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-light"
              placeholder="Enter a descriptive title"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-text mb-2">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={8}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-light"
              placeholder="Provide detailed information about your leak"
            />
          </div>

          <div>
            <label htmlFor="source" className="block text-sm font-medium text-text mb-2">
              Source
            </label>
            <input
              type="text"
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-light"
              placeholder="Anonymous"
            />
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-text mb-2">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-light"
              placeholder="politics, economy, corruption (separate with commas)"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-accent py-3 px-6 rounded-lg hover:bg-primary-light transition-colors text-lg font-medium mt-8"
          >
            Submit Leak Securely
          </button>
        </form>
      </div>
    </div>
  );
};

export default Submit; 