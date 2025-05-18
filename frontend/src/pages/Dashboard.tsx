import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Submissions Overview */}
        <div className="bg-white rounded-lg shadow-custom p-6">
          <h2 className="text-xl font-bold text-primary mb-4">Your Submissions</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Total Submissions</span>
              <span className="font-bold">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Under Review</span>
              <span className="font-bold">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Published</span>
              <span className="font-bold">0</span>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="bg-white rounded-lg shadow-custom p-6">
          <h2 className="text-xl font-bold text-primary mb-4">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <p className="font-medium">user@example.com</p>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Member Since</label>
              <p className="font-medium">May 2024</p>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow-custom p-6">
          <h2 className="text-xl font-bold text-primary mb-4">Security</h2>
          <div className="space-y-4">
            <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors">
              Change Password
            </button>
            <button className="w-full border border-primary text-primary py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 