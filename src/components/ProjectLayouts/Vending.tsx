import React from 'react';

export default function Vending() {
  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 py-20">
      {/* Title and Description */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">The Assignment:</h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Build a vending machine that vends something that cannot be normally sold.</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          This experience is a choose-your-own-adventure style interactive prototype that guides users through a journey of self-discovery and personal growth, helping them find contentment and meaning in their daily lives.
        </p>
      </section>

      {/* Figma Embed */}
      <section>
        <iframe 
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%' }} 
          height="720" 
          src="https://embed.figma.com/proto/MI9YHNoA6lFTO5kUhRBQQv/?page-id=28%3A9&node-id=339-810&viewport=2048%2C1803%2C0.02&scaling=contain&content-scaling=fixed&starting-point-node-id=362%3A86&embed-host=share" 
          allowFullScreen
        />
      </section>
    </div>
  );
}
