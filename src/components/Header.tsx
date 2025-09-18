import React from 'react';
import { Stethoscope } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur shadow-sm border-b border-gray-100 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Branding */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg" aria-label="App icon">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 whitespace-nowrap leading-tight">
                Medicine Reminder App Prototype 
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">
                Healthcare Workflow Solution
              </p>
            </div>
          </div>

          {/* Optional future: navigation or CTA (keeps header easily extendable) */}
          <nav className="hidden"></nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
