import React from 'react';
import { Heart } from 'lucide-react';
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8 mb-8">
          <div>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Tablet Reminder App</h3>
                <p className="text-gray-400">Healthcare Workflow Solution</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 max-w-2xl mx-auto">
              A comprehensive medication management system that will connect patients, doctors, 
              and pharmacists in a seamless healthcare workflow for better patient outcomes.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              {/* <div className="flex items-center space-x-2 text-sm text-gray-400">
                <User className="h-4 w-4" />
                <span>Student Project</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>2025</span>
              </div> */}
            </div>
            {/* Prominent attribution block below */}
            {/* <div className="bg-gray-800 border border-blue-600 rounded-xl p-6 mb-2 shadow-lg">
              <h4 className="text-2xl font-extrabold text-blue-400 mb-2">Project Credits</h4>
              <div className="text-lg font-semibold tracking-wide text-white mb-1">
                Concept & Research: <span className="text-blue-300">Your Name</span>
              </div>
              <div className="text-lg font-semibold tracking-wide text-white">
                Design & Development: <span className="text-teal-300">Your Name</span>
              </div>
            </div>  */} 
          </div>
          
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Key Features</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Automated Reminders</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Multi-Role Access</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Medication Progress Tracking</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>SMS Authentication</span>
              </li>
            </ul>
          </div> */}
          
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">User Roles</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Patients</li>
              <li>• Receptionists</li>
              <li>• Doctors</li>
              <li>• Pharmacists</li>
            </ul>
          </div> */}
        </div>
        
        {/* --- REMOVE the old copyright/contact/disclaimer section here --- */}
        
        {/* ADD Developed by section */}
        {/* <div className="mt-8 text-center">
          <span className="inline-block bg-gray-800 border border-teal-500 text-teal-300 text-lg px-6 py-3 rounded-xl font-bold shadow-md">
           Website Developed by: Hardik Baviskar
          </span>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
