import React from 'react';
import { MessageCircle, AlertTriangle, HeartPulse } from 'lucide-react';

const ChatbotSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-tr from-blue-50 to-teal-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full">
            <MessageCircle className="h-6 w-6 text-blue-600 mr-2" />
            <span className="font-semibold text-blue-700 text-lg">AI Chatbot for Side-Effect Reporting</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">Patient Support, Smarter Reporting</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Our built-in AI chatbot allows patients to report any side effects they experience in a simple conversation. All reports are analyzed instantly for <b>clinical data management</b>, helping keep patients safe and healthcare teams informed.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-7 flex-1 min-w-[280px] max-w-md">
            <div className="flex items-center mb-4">
              <MessageCircle className="h-7 w-7 text-blue-600 mr-3" />
              <span className="text-blue-800 font-bold text-lg">For Patients</span>
            </div>
            <ul className="list-disc pl-5 text-gray-800 space-y-1">
              <li>Chatbot asks about symptoms in plain language</li>
              <li>Easy for all patients to use, 24/7</li>
              <li>Personalized follow-up questions</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-7 flex-1 min-w-[280px] max-w-md">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-7 w-7 text-orange-500 mr-3" />
              <span className="text-orange-700 font-bold text-lg">For Clinics</span>
            </div>
            <ul className="list-disc pl-5 text-gray-800 space-y-1">
              <li>AI analyzes & triages side-effects reports</li>
              <li>Serious cases flagged immediately</li>
              <li>All responses help improve medication safety</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <HeartPulse className="inline h-8 w-8 text-teal-500 mb-2" />
          <p className="text-teal-700 font-semibold text-md">
            Adding our AI chatbot means more data, faster help, and safer care—for every patient.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
