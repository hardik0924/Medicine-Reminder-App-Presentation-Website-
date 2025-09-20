import React from 'react';
import { Check, Shield, Clock, Users, BarChart3, Smartphone } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "Will remove patient confusion",
    description: "Doctor will set an accurate schedule, eliminating medication timing uncertainty."
  },
  {
    icon: Smartphone,
    title: "Will have no complicated setup for patients",
    description: "Simple SMS-based login will have an intuitive interface for all ages."
  },
  {
    icon: Clock,
    title: "Will prevent medication mistakes",
    description: "Automated reminders will ensure doses are taken at the right time."
  },
  {
    icon: BarChart3,
    title: "Will track medication taking for better health",
    description: "Will monitor how well patients take their medication for improved outcomes."
  },
  {
    icon: Users,
    title: "Will streamline work for hospital staff",
    description: "Integrated workflow will reduce administrative burden on healthcare teams."
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="why" className="py-16 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why This App?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Designed to solve real healthcare challenges with practical, user-friendly solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              aria-label={`Benefit: ${benefit.title}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                      <benefit.icon className="h-6 w-6 text-white" aria-hidden />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Check className="h-4 w-4 text-green-300 mr-2 flex-shrink-0" aria-hidden />
                      <h3 className="text-lg font-semibold leading-tight">{benefit.title}</h3>
                    </div>
                    <p className="text-blue-100 leading-relaxed text-sm md:text-base">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Built for Healthcare Excellence</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Our app bridges the gap between healthcare providers and patients, creating a seamless medication management ecosystem that improves how patients take their medication, reduces errors, and enhances overall patient care quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
