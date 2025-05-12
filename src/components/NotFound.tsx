import React from 'react';

const NotFound: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white" style={{ fontFamily: 'Rubik, sans-serif' }}>
    <h1 className="text-7xl font-bold mb-4 text-[#d60209]">404</h1>
    <p className="text-2xl mb-6 text-gray-300">Sorry, the page you are looking for does not exist.</p>
    <a href="/" className="text-[#d60209] underline text-lg">Go back home</a>
  </div>
);

export default NotFound; 