import React from 'react';
import { 
  Phone, 
  MapPin, 
  AlertTriangle, 
  Users, 
  Truck, 
  Building2,
  Clock,
  Shield
} from 'lucide-react';

const EmergencyFeatures: React.FC = () => {
  const emergencyContacts = [
    {
      icon: Building2,
      title: "Hospital Direct Line",
      description: "Will instantly connect to the prescribing hospital",
      color: "bg-red-500",
      details: "Immediate connection to hospital emergency department"
    },
    {
      icon: Truck,
      title: "Government Ambulance",
      description: "Will call 108 emergency ambulance service",
      color: "bg-orange-500",
      details: "Direct line to government emergency medical services"
    },
    {
      icon: Users,
      title: "Emergency Contacts",
      description: "Will notify pre-saved family members",
      color: "bg-blue-500",
      details: "Automatic calls to designated emergency contacts"
    }
  ];

  const emergencySteps = [
    {
      step: 1,
      title: "Press Emergency Button",
      description: "Patient will press the red emergency button in the app",
      icon: AlertTriangle
    },
    {
      step: 2,
      title: "Location Detection",
      description: "App will automatically detect and share patient's location",
      icon: MapPin
    },
    {
      step: 3,
      title: "Multiple Calls",
      description: "Simultaneous calls will be made to hospital, ambulance, and contacts",
      icon: Phone
    },
    {
      step: 4,
      title: "Medical Info Shared",
      description: "Patient's medication history will be shared with responders",
      icon: Shield
    }
  ];

  return (
    <section id="emergency" className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-red-500 p-3 rounded-full mr-4">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Emergency Safety Feature
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our app will include a critical safety feature - one-touch emergency assistance that will connect patients 
            to help when they need it most
          </p>
        </div>

        {/* Emergency Demo Card */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-red-100">
            <div className="text-center mb-6">
              <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <AlertTriangle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Button</h3>
              <p className="text-gray-600">Press and hold for 3 seconds</p>
            </div>
            
            <div className="bg-red-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-red-500 mr-2" />
                <span className="text-sm font-medium text-red-700">Location: Detected</span>
              </div>
              <div className="text-center">
                <p className="text-sm text-red-600 font-medium">Emergency services will be contacted with:</p>
                <ul className="text-xs text-red-600 mt-2 space-y-1">
                  <li>• Your exact location</li>
                  <li>• Current medications</li>
                  <li>• Medical history</li>
                  <li>• Emergency contacts</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-100 rounded-lg">
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 text-red-600 mr-2" />
                  <span className="text-sm font-medium text-red-800">Hospital</span>
                </div>
                <span className="text-xs text-red-600 font-semibold">Calling...</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-100 rounded-lg">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-orange-600 mr-2" />
                  <span className="text-sm font-medium text-orange-800">Ambulance 108</span>
                </div>
                <span className="text-xs text-orange-600 font-semibold">Calling...</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-100 rounded-lg">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-800">Family Contact</span>
                </div>
                <span className="text-xs text-blue-600 font-semibold">Notifying...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contacts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl hover:border-gray-200 h-full">
                <div className={`${contact.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{contact.title}</h3>
                <p className="text-red-600 font-semibold mb-3 text-center">{contact.description}</p>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{contact.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Process Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How Emergency Feature Will Work</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencySteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  {/* Step Number - positioned above icon */}
                  <div className="bg-red-600 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  {/* Icon Circle */}
                  <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < emergencySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-red-300"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Why This Emergency Feature Matters</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Instant Response</h4>
                <p className="text-sm text-red-100">Will save critical seconds in emergencies</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Location Sharing</h4>
                <p className="text-sm text-red-100">Will automatically share exact location</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Medical History</h4>
                <p className="text-sm text-red-100">Will share medication and health data</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Family Alert</h4>
                <p className="text-sm text-red-100">Will notify loved ones immediately</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyFeatures;