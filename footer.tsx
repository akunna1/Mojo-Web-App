// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-6 shadow-lg p-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Helper Mojo. All rights reserved.</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
              Created by {' '}
              <a 
                href="https://akunnatechstudio.com/" 
                className="font-bold hover:text-[#FFC107]" 
                target="_blank" 
                rel="noopener noreferrer"
              > 
                 Akunna Tech Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
