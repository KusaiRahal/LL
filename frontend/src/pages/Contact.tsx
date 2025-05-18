import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-custom p-8">
        <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
        <p className="text-text-light mb-8">
          For secure communication, please use our encrypted contact form below. Do not include sensitive information in your initial message.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name (Optional)
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-dark transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-sm text-text-light">
          <p>For maximum security:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Use a secure email provider</li>
            <li>Connect via VPN or Tor</li>
            <li>Do not include sensitive details in initial contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact; 