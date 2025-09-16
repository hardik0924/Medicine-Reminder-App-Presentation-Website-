import React from 'react';
import { Heart, Smartphone, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: App intro */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Medicine Reminder App
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
              Will Connect Patients, Doctors, and Pharmacists for Safer, Smarter Medication
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              See how hospitals will use our app to ensure every patient gets the right medicine at the right time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm transition hover:shadow-md">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium text-gray-700">Patient Care</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm transition hover:shadow-md">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">Timely Reminders</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm transition hover:shadow-md">
                <Smartphone className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">Mobile First</span>
              </div>
            </div>

            {/* Attribution (visible everywhere, nicely formatted) */}
            <div className="border-t border-gray-200 pt-5 mt-8 max-w-2xl mx-auto lg:mx-0">
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-center lg:justify-start text-base md:text-lg font-semibold text-gray-700">
    <span>Concept & Research by:</span>
    <div className="flex flex-col items-center sm:flex-row sm:items-center gap-0 sm:gap-2">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-bold hover:underline"
      >
        Shreyash Salpure
      </a>
      <span className="sm:inline hidden">,</span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-bold hover:underline"
      >
        Mansi Nikam
      </a>
    </div>
  </div>
</div>

          </div>
          
          {/* Right side: Demo Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-6 text-white text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Medicine Reminder</h3>
                <p className="text-blue-100">Time for your medication</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Morning Dose</span>
                  <span className="text-green-600 font-semibold">✓ Taken</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <span className="font-medium text-gray-900">Afternoon Dose</span>
                  <span className="text-blue-600 font-semibold">Due Now</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Evening Dose</span>
                  <span className="text-gray-500">7:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
