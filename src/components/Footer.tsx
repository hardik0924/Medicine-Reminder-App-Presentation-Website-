import React from 'react';
import { Heart, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand area */}
        <div className="flex flex-col items-center text-center gap-8 mb-8">
          <div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" aria-label="App Heart Icon" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Medicine Reminder App</h3>
                <p className="text-gray-400">Healthcare Workflow Solution</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 max-w-2xl mx-auto">
              A comprehensive medication management system that will connect patients, doctors, 
              and pharmacists in a seamless healthcare workflow for better patient outcomes.
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Credits Section */}
        <div className="text-center">
          <div className="text-base md:text-lg font-semibold text-gray-400 leading-relaxed">
            <div className="flex flex-col items-center justify-center gap-2">
              {/* Uncomment this block if you add concept credits
              <div className="flex items-center justify-center gap-2">
                <span>Concept & Research by:</span>
                <span className="text-blue-400 font-bold">Shreyash Salpure,</span>
                <span className="text-blue-400 font-bold">Mansi Nikam</span>
              </div>
              */}
              <div className="flex items-center justify-center gap-2">
                <span className="flex-shrink-0">Website Developed by:</span>
                <a 
                  href="https://www.linkedin.com/in/hardik-baviskar22"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hardik Baviskar's LinkedIn Profile"
                  className="flex items-center gap-1 text-blue-500 font-bold hover:text-white transition-colors"
                >
                  <u>Hardik Baviskar</u>
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center">
  <span className="text-sm text-gray-500">
    © 2025 Medicine Reminder App Prototype. All rights reserved by the developer.
  </span>
</div>

      </div>
    </footer>
  );
};

export default Footer;
