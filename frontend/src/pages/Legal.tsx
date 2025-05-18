import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-custom p-8">
        <h1 className="text-4xl font-bold text-primary mb-6">Legal Information</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Terms of Service</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              By using LibyaLeaks, you agree to our terms of service and privacy policy. Our platform is designed to protect whistleblowers and promote transparency.
            </p>
            <p className="mb-4">
              We are committed to protecting the identities of our sources while maintaining the highest standards of journalistic integrity.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Privacy Policy</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              We implement strict privacy measures to protect our users:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>No IP address logging</li>
              <li>End-to-end encryption</li>
              <li>Secure file handling</li>
              <li>Anonymous submission options</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Disclaimer</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              While we strive for accuracy, we cannot guarantee the absolute accuracy of all information published. We verify submissions to the best of our ability.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Contact</h2>
          <div className="prose max-w-none">
            <p>
              For legal inquiries, please use our secure contact form or reach out through appropriate legal channels.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Legal; 