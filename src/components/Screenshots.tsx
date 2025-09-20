import React, { useState } from 'react';
import { Smartphone, Monitor, Tablet, Clock, Check, X, SunSnow as Snooze } from 'lucide-react';

// Medicine database with images from Pexels
const medicines = [
  {
    id: 1,
    name: 'Calpol-500 mg',
    image: '/med1.jpg',
    // description: 'Diabetes medication'
  },
  {
    id: 2,
    name: 'Moxikind CV -625 mg',
    image: '/med2.jpg',
    // description: 'Blood pressure medication'
  },
  {
    id: 3,
    name: 'Sy. Ascoril-LS',
    image: '/med3.jpg',
    // description: 'Cholesterol medication'
  },
  {
    id: 4,
    name: 'Met XL-50',
    image: '/med4.jpg',
    // description: 'Acid reflux medication'
  },
  // {
  //   id: 5,
  //   name: 'Amlodipine 5mg',
  //   image: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  //   description: 'Blood pressure medication'
  // },
  // {
  //   id: 6,
  //   name: 'Levothyroxine 50mcg',
  //   image: 'https://images.pexels.com/photos/3683071/pexels-photo-3683071.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  //   description: 'Thyroid medication'
  // },
  // {
  //   id: 7,
  //   name: 'Aspirin 81mg',
  //   image: 'https://images.pexels.com/photos/3683042/pexels-photo-3683042.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  //   description: 'Blood thinner'
  // },
  // {
  //   id: 8,
  //   name: 'Gabapentin 300mg',
  //   image: 'https://images.pexels.com/photos/3683050/pexels-photo-3683050.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  //   description: 'Nerve pain medication'
  // }
];

const frequencies = [
  'Once daily',
  'Twice daily',
  'Three times daily',
  'Four times daily',
  'Every 8 hours',
  'Every 12 hours',
  'As needed'
];

const Screenshots: React.FC = () => {
  // Patient screen state
  const [patientMedications] = useState([
    { name: 'Calpol-500 mg', time: '8:00 AM', status: 'taken', dueIn: null },
    { name: 'Moxikind CV -625 mg', time: '2:30 PM', status: 'due', dueIn: '15 minutes' },
    { name: 'Met XL-50', time: '8:00 PM', status: 'upcoming', dueIn: null }
  ]);

  // Doctor screen state
  const [selectedMedicine, setSelectedMedicine] = useState(medicines[0]);
  const [selectedFrequency, setSelectedFrequency] = useState('Twice daily');
  const [morningTime, setMorningTime] = useState('08:00');
  const [eveningTime, setEveningTime] = useState('20:00');

  // OTP screen state
  const [otpValues, setOtpValues] = useState(['1', '2', '3', '4', '', '']);

  const handleMedicineChange = (medicineId: number) => {
    const medicine = medicines.find(m => m.id === medicineId);
    if (medicine) {
      setSelectedMedicine(medicine);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
    }
  };

  const handlePatientAction = (action: string) => {
    // This would normally update the medication status
    console.log(`Patient ${action} medication`);
  };

  return (
    <section id="demo" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive App Demo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience how the app will work with these interactive mockups - try selecting medicines, changing times, and exploring the interface
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Login/OTP Screen - Reordered to be first */}
          <div className="text-center group">
            <div className="relative mx-auto mb-6 max-w-sm">
              <div className="bg-black rounded-[3rem] p-2 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  <div className="bg-gray-50 px-6 pt-8 pb-4 text-center relative">
                    <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 border border-gray-400 rounded-sm">
                          <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-700">Patient Login</h3>
                  </div>
                  <div className="p-6 min-h-[500px] flex flex-col justify-center">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="h-8 w-8 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Verify Your Phone</h4>
                      <p className="text-sm text-gray-600">Enter the 6-digit code sent to<br />+91 7841082472</p>
                    </div>
                    <div className="flex justify-center space-x-2 mb-6">
                      {otpValues.map((value, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength={1}
                          className="w-10 h-10 border-2 border-gray-300 rounded-lg text-center font-bold text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                          value={value}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                        />
                      ))}
                    </div>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg mb-3 text-sm font-medium transition-colors">
                      Verify & Login
                    </button>
                    <button className="w-full text-blue-500 hover:text-blue-600 py-2 text-sm font-medium transition-colors">
                      Resend Code
                    </button>
                    <div className="mt-6 text-center">
                      <p className="text-xs text-gray-500">
                        By continuing, you agree to our Terms of Service
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 text-purple-600 mb-2">
              <Tablet className="h-5 w-5" />
              <span className="font-semibold">Secure Authentication</span>
            </div>
            <p className="text-gray-600 text-sm">Interactive OTP verification with real-time input handling</p>
          </div>

          {/* Doctor Prescription Screen - Reordered to be second */}
          <div className="text-center group">
            <div className="relative mx-auto mb-6 max-w-sm">
              <div className="bg-black rounded-[3rem] p-2 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  <div className="bg-gray-50 px-6 pt-8 pb-4 text-center relative">
                    <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 border border-gray-400 rounded-sm">
                          <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-700">Doctor Dashboard</h3>
                  </div>
                  <div className="p-6 min-h-[500px]">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Prescribe Medication</h4>
                      <p className="text-sm text-gray-600">Patient: Shreyash Salpure</p>
                    </div>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-3">
                        <label className="text-xs font-medium text-gray-700 block mb-2">Select Medicine</label>
                        <select
                          className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={selectedMedicine.id}
                          onChange={(e) => handleMedicineChange(Number(e.target.value))}
                        >
                          {medicines.map((medicine) => (
                            <option key={medicine.id} value={medicine.id}>
                              {medicine.name}
                            </option>
                          ))}
                        </select>
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg flex items-center space-x-3">
                          <img
                            src={selectedMedicine.image}
                            alt={selectedMedicine.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{selectedMedicine.name}</p>

                          </div>
                        </div>
                      </div>
                      <div className="border rounded-lg p-3">
                        <label className="text-xs font-medium text-gray-700 block mb-2">Frequency</label>
                        <select
                          className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={selectedFrequency}
                          onChange={(e) => setSelectedFrequency(e.target.value)}
                        >
                          {frequencies.map((freq) => (
                            <option key={freq} value={freq}>
                              {freq}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="border rounded-lg p-3">
                        <label className="text-xs font-medium text-gray-700 block mb-2">Reminder Times</label>
                        <div className="flex space-x-2">
                          <div className="flex-1">
                            <label className="text-xs text-gray-600 block mb-1">Morning</label>
                            <input
                              type="time"
                              className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              value={morningTime}
                              onChange={(e) => setMorningTime(e.target.value)}
                            />
                          </div>
                          <div className="flex-1">
                            <label className="text-xs text-gray-600 block mb-1">Evening</label>
                            <input
                              type="time"
                              className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              value={eveningTime}
                              onChange={(e) => setEveningTime(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg mt-6 text-sm font-medium transition-colors">
                      Save Prescription
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-600 mb-2">
              <Monitor className="h-5 w-5" />
              <span className="font-semibold">Doctor Dashboard</span>
            </div>
            <p className="text-gray-600 text-sm">Interactive prescription interface with medicine database and scheduling</p>
          </div>

          {/* Patient Reminder Screen - Reordered to be last */}
          <div className="text-center group">
            <div className="relative mx-auto mb-6 max-w-sm">
              <div className="bg-black rounded-[3rem] p-2 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  <div className="bg-gray-50 px-6 pt-8 pb-4 text-center relative">
                    <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 border border-gray-400 rounded-sm">
                          <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-700">Medicine Reminder</h3>
                  </div>
                  <div className="p-6 min-h-[500px]">
                    <div className="text-center mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Good Morning, Shreyash!</h4>
                      <p className="text-sm text-gray-600">You have 2 medications due today</p>
                    </div>
                    <div className="space-y-4">
                      {patientMedications.map((med, index) => (
                        <div key={index} className={`border-l-4 p-3 rounded-r-lg ${
                          med.status === 'taken' ? 'bg-green-50 border-green-500' :
                          med.status === 'due' ? 'bg-blue-50 border-blue-500' :
                          'bg-gray-50 border-gray-300'
                        }`}>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-gray-900 text-sm">{med.name}</p>
                              <p className={`text-xs ${
                                med.status === 'taken' ? 'text-green-600' :
                                med.status === 'due' ? 'text-blue-600' :
                                'text-gray-500'
                              }`}>
                                {med.status === 'taken' ? `Taken at ${med.time}` :
                                 med.status === 'due' ? `Due in ${med.dueIn}` :
                                 med.time}
                              </p>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                              med.status === 'taken' ? 'bg-green-500 text-white' :
                              med.status === 'due' ? 'bg-blue-500 text-white' :
                              'bg-gray-300 text-gray-700'
                            }`}>
                              {med.status === 'taken' ? '✓' :
                               med.status === 'due' ? 'Due' :
                               'Later'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 space-y-2">
                      <button
                        onClick={() => handlePatientAction('took')}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
                      >
                        <Check className="h-4 w-4" />
                        <span>Mark as Taken</span>
                      </button>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handlePatientAction('snoozed')}
                          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
                        >
                          <Snooze className="h-4 w-4" />
                          <span>Snooze</span>
                        </button>
                        <button
                          onClick={() => handlePatientAction('skipped')}
                          className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
                        >
                          <X className="h-4 w-4" />
                          <span>Skip</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-2">
              <Smartphone className="h-5 w-5" />
              <span className="font-semibold">Patient Interface</span>
            </div>
            <p className="text-gray-600 text-sm">Interactive medication tracking with real-time status updates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;