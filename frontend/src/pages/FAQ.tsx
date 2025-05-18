import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How can I submit information securely?',
      answer: 'We provide multiple secure channels for submission, including encrypted uploads and anonymous messaging. Visit our Submit page for detailed instructions.'
    },
    {
      question: 'How do you protect sources?',
      answer: 'We use state-of-the-art encryption and never store identifying information. Our platform is designed with source protection as the top priority.'
    },
    {
      question: 'What type of information should I submit?',
      answer: 'We accept verifiable information about corruption, human rights violations, abuse of power, and other matters of public interest related to Libya.'
    },
    {
      question: 'How do you verify submissions?',
      answer: 'Our team of experienced journalists and researchers thoroughly verify all submissions before publication, cross-referencing with multiple sources.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-custom p-8">
        <h1 className="text-4xl font-bold text-primary mb-6">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              <h2 className="text-xl font-semibold text-primary mb-2">{faq.question}</h2>
              <p className="text-text-light">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 