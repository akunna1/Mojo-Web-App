'use client';

import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    // Update the current year after the component mounts on the client
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <footer className="bg-gray-50 py-6 shadow-lg p-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">&copy; {currentYear} Helper Mojo. All rights reserved.</p>
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
