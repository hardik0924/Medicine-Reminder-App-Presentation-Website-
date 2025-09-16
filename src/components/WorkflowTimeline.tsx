import React from 'react';
import { 
  UserPlus, 
  Stethoscope, 
  FlaskConical, 
  Smartphone, 
  Bell, 
  BarChart3,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

const WorkflowTimeline: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Patient Arrives",
      description: "Receptionist registers the patient's name and phone number in the app.",
      icon: UserPlus,
      color: "bg-blue-500",
      details: "A quick registration gets patients into the system instantly."
    },
    {
      number: 2,
      title: "Doctor Consultation",
      description: "Doctor selects the patient, chooses medicines, and sets the schedule.",
      icon: Stethoscope,
      color: "bg-green-500",
      details: "Streamlined prescribing with built-in medication scheduling."
    },
    {
      number: 3,
      title: "Pharmacy Database",
      description: "Pharmacist ensures all medicine data is up to date.",
      icon: FlaskConical,
      color: "bg-purple-500",
      details: "Comprehensive database with images and detailed information."
    },
    {
      number: 4,
      title: "Patient Login",
      description: "Patient receives an SMS and logs in with an OTP for secure access.",
      icon: Smartphone,
      color: "bg-teal-500",
      details: "Simple, secure authentication using SMS-based OTP verification."
    },
    {
      number: 5,
      title: "Auto-Reminders",
      description: "Patient receives notifications and marks doses as 'Taken', 'Skip', or 'Snooze'.",
      icon: Bell,
      color: "bg-orange-500",
      details: "Smart reminders with easy interactions improve medication adherence."
    },
    {
      number: 6,
      title: "Progress Tracking",
      description: "Doctor reviews the patient's medication progress for follow-up visits.",
      icon: BarChart3,
      color: "bg-red-500",
      details: "Comprehensive reports support better healthcare decisions."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Workflow Roadmap
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow the complete journey from patient registration to medication adherence tracking
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop Timeline - 3x2 Grid */}
          <div className="hidden lg:block">
            {/* Top Row */}
            <div className="grid grid-cols-3 gap-8 mb-12 relative">
              {steps.slice(0, 3).map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center">
                    <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg hover:scale-110 transition-transform duration-300 relative z-10`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 min-h-[200px] w-full">
                      <div className="text-center">
                        <div className={`${step.color} w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3`}>
                          <span className="text-lg font-bold text-white">{step.number}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{step.description}</p>
                        <p className="text-sm text-blue-600 font-medium">{step.details}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Horizontal Arrow */}
                  {index < 2 && (
                    <div className="absolute top-10 -right-4 z-20">
                      <div className="bg-white rounded-full p-2 shadow-md">
                        <ArrowRight className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                  )}

                  {/* Down Arrow to next row from last card in top row */}
                  {index === 2 && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
                      <div className="bg-white rounded-full p-2 shadow-md">
                        <ArrowDown className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-3 gap-8 relative">
              {steps.slice(3, 6).map((step, index) => (
                <div key={index + 3} className="relative" style={{ order: index === 0 ? 2 : index === 1 ? 1 : 0 }}>
                  <div className="flex flex-col items-center">
                    <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg hover:scale-110 transition-transform duration-300 relative z-10`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 min-h-[200px] w-full">
                      <div className="text-center">
                        <div className={`${step.color} w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3`}>
                          <span className="text-lg font-bold text-white">{step.number}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{step.description}</p>
                        <p className="text-sm text-blue-600 font-medium">{step.details}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Horizontal arrows for bottom row (pointing left) */}
                  {index < 2 && (
                    <div className="absolute top-10 -left-4 z-20">
                      <div className="bg-white rounded-full p-2 shadow-md">
                        <ArrowRight className="h-6 w-6 text-blue-500 transform rotate-180" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Connection Line */}
            <div className="absolute top-[140px] left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-blue-300 to-blue-500 z-0"></div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-4`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="w-full">
                    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 text-center">
                      <div className="flex items-center justify-center mb-3">
                        <div className={`${step.color} w-8 h-8 rounded-full flex items-center justify-center mr-3`}>
                          <span className="text-sm font-bold text-white">{step.number}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">{step.description}</p>
                      <p className="text-sm text-blue-600">{step.details}</p>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-4 mb-4 flex justify-center">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <ArrowDown className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Flow Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Workflow Summary</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto">
              From patient registration to medication progress tracking, our app will create a seamless 
              connection between all healthcare stakeholders, ensuring better patient outcomes and 
              streamlined hospital operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">6 Connected Steps</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">4 User Roles</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Seamless Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowTimeline;