import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Leave Management System</h1>
      <p className="text-lg text-center max-w-xl mb-6">
        Streamline your leave applications, approvals, and tracking all in one place.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
