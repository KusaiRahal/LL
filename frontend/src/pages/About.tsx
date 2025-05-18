import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-custom p-8">
        <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
        
        <div className="prose max-w-none space-y-8">
          {/* Main Introduction */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed">
              LibyaLeaks is a people-powered platform committed to exposing the truth, amplifying unheard voices, and shedding light on the stories hidden in the shadows of Libya's conflict and corruption.
            </p>
            <p className="text-lg mt-4 leading-relaxed">
              We are not affiliated with any political party, militia, or foreign interest. We are Libyans, journalists, technologists, and concerned global citizens who believe in transparency, accountability, and justice.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <ul className="list-none space-y-2">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                To break the silence.
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                To challenge censorship.
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                To expose abuse of power.
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                To ensure that truth, no matter how inconvenient, finds its way to the people.
              </li>
            </ul>
          </div>

          {/* What We Do */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold mb-2">Investigative Reports</h3>
                <p>We publish evidence-based exposés on political corruption, militia violence, foreign interference, and systemic injustice.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold mb-2">Leaks & Whistleblower Protection</h3>
                <p>We provide a secure and anonymous way for individuals to share critical information.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold mb-2">Community Journalism</h3>
                <p>We centre voices from the ground — activists, survivors, witnesses — without distortion or sanitisation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold mb-2">Analysis & Commentary</h3>
                <p>We provide in-depth, context-rich analysis that connects the dots others are too afraid to name.</p>
              </div>
            </div>
          </div>

          {/* Why LibyaLeaks */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Why LibyaLeaks?</h2>
            <p className="mb-4">
              Libya deserves better than propaganda and media manipulation. We launched LibyaLeaks to create a digital space where facts can't be buried, and where the powerful can no longer hide behind chaos.
            </p>
            <p>
              Our platform is inspired by the courage of whistleblowers, the power of community resistance, and the unwavering demand for dignity, rights, and freedom in Libya.
            </p>
          </div>

          {/* Get Involved */}
          <div className="bg-black text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
            <p className="text-xl mb-4">Truth needs defenders.</p>
            <p className="mb-4">
              Whether you're a researcher, designer, coder, journalist, or everyday citizen — you can be part of this movement.
            </p>
            <p className="font-bold">
              Submit a tip. Share a story. Join the mission.
            </p>
          </div>

          {/* Closing Statement */}
          <div className="text-center mt-12">
            <p className="text-xl font-bold italic">LibyaLeaks — Where the truth survives.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 