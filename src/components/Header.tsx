import React, { useState } from 'react';
import { Stethoscope } from 'lucide-react';
// You can use any hamburger/menu/close icon, here's a simple SVG for illustration.
const MenuIcon = ({ open }: { open: boolean }) => (
  open ?
    (<svg width="28" height="28" fill="none"><path d="M7 14h14M7 9h14M7 19h14" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" /></svg>) :
    (<svg width="28" height="28" fill="none"><path d="M7 9h14M7 19h14" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" /></svg>)
);

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => setMobileMenuOpen((open) => !open);
  const handleNavClick = () => setMobileMenuOpen(false);

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#hero" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
            <a href="#demo" className="text-gray-700 hover:text-blue-600 font-medium transition">Prototype</a>
            <a href="#workflow" className="text-gray-700 hover:text-blue-600 font-medium transition">Workflow</a>
            <a href="#chatbot" className="text-gray-700 hover:text-blue-600 font-medium transition">AI Chatbot</a>
            <a href="#emergency" className="text-gray-700 hover:text-blue-600 font-medium transition">Emergency</a>
            <a href="#why" className="text-gray-700 hover:text-blue-600 font-medium transition">Why Us?</a>
          </nav>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden p-2 rounded-lg border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            onClick={handleMobileMenuToggle}
            aria-label="Open menu"
          >
            <MenuIcon open={mobileMenuOpen} />
          </button>
        </div>
        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg py-2 px-5 mt-2 flex flex-col gap-2">
            <a href="#hero" onClick={handleNavClick} className="py-2 text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
            <a href="#demo" onClick={handleNavClick} className="py-2 text-gray-700 hover:text-blue-600 font-medium transition">Prototype</a>
            <a href="#workflow" onClick={handleNavClick} className="py-2 text-gray-700 hover:text-blue-600 font-medium transition">Workflow</a>
            <a href="#chatbot" onClick={handleNavClick} className="py-2 text-gray-700 hover:text-blue-600 font-medium transition">AI Chatbot</a>
            <a href="#emergency" onClick={handleNavClick} className="py-2 text-gray-700 hover:text-blue-600 font-medium transition">Emergency</a>
            <a href="#why" onClick={handleNavClick} className="py-2 text-gray-700 hover:text-blue-600 font-medium transition">Why Us?</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
