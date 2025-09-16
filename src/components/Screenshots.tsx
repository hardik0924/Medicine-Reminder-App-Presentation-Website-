import React from 'react';
import { Smartphone, Monitor, Tablet } from 'lucide-react';

const Screenshots: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            App Screenshots & Mockups
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See the intuitive interface designed for both healthcare professionals and patients
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Patient Reminder Screen */}
          <div className="text-center group">
            <div className="relative mx-auto mb-6 max-w-sm">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-3 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Phone Header */}
                  <div className="bg-gray-50 p-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-700">Patient Home</h3>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Good Morning, Shreyash!</h4>
                      <p className="text-sm text-gray-600">You have 2 medications due today</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-900 text-sm">Metformin 500mg</p>
                            <p className="text-xs text-blue-600">Due in 15 minutes</p>
                          </div>
                          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">Due</div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-900 text-sm">Lisinopril 10mg</p>
                            <p className="text-xs text-green-600">Taken at 8:00 AM</p>
                          </div>
                          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">✓</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex space-x-2">
                      <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">Mark Taken</button>
                      <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm">Snooze</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-2">
              <Smartphone className="h-5 w-5" />
              <span className="font-semibold">Patient Interface</span>
            </div>
            <p className="text-gray-600 text-sm">Simple medication tracking with clear reminders and easy interaction</p>
          </div>

          {/* Doctor Prescription Screen */}
          <div className="text-center group">
            <div className="relative mx-auto mb-6 max-w-sm">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-3 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-gray-50 p-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-700">Doctor Dashboard</h3>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Prescribe Medication</h4>
                      <p className="text-sm text-gray-600">Patient: Shreyash Salpure</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border rounded-lg p-3">
                        <label className="text-xs font-medium text-gray-700 block mb-1">Medicine</label>
                        <select className="w-full p-2 border rounded text-sm">
                          <option>Metformin 500mg</option>
                        </select>
                      </div>
                      
                      <div className="border rounded-lg p-3">
                        <label className="text-xs font-medium text-gray-700 block mb-1">Frequency</label>
                        <select className="w-full p-2 border rounded text-sm">
                          <option>Twice daily</option>
                        </select>
                      </div>
                      
                      <div className="border rounded-lg p-3">
                        <label className="text-xs font-medium text-gray-700 block mb-1">Times</label>
                        <div className="flex space-x-2">
                          <input type="time" className="flex-1 p-2 border rounded text-sm" value="08:00" readOnly />
                          <input type="time" className="flex-1 p-2 border rounded text-sm" value="20:00" readOnly />
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg mt-4 text-sm">Save Prescription</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-600 mb-2">
              <Monitor className="h-5 w-5" />
              <span className="font-semibold">Doctor Dashboard</span>
            </div>
            <p className="text-gray-600 text-sm">Streamlined prescription interface with medication scheduling</p>
          </div>

          {/* Login/OTP Screen */}
          <div className="text-center group">
            <div className="relative mx-auto mb-6 max-w-sm">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-3 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-gray-50 p-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-700">Patient Login</h3>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="h-8 w-8 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Verify Your Phone</h4>
                      <p className="text-sm text-gray-600">Enter the 6-digit code sent to<br />+1 (555) 123-4567</p>
                    </div>
                    
                    <div className="flex justify-center space-x-2 mb-6">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength={1}
                          className="w-10 h-10 border-2 border-gray-300 rounded-lg text-center font-bold text-lg focus:border-blue-500"
                          value={i <= 4 ? (i === 1 ? '1' : i === 2 ? '2' : i === 3 ? '3' : '4') : ''}
                          readOnly
                        />
                      ))}
                    </div>
                    
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mb-3 text-sm">Verify & Login</button>
                    <button className="w-full text-blue-500 py-2 text-sm">Resend Code</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 text-purple-600 mb-2">
              <Tablet className="h-5 w-5" />
              <span className="font-semibold">Secure Authentication</span>
            </div>
            <p className="text-gray-600 text-sm">Simple SMS-based verification for easy, secure access</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;