import React from 'react';
import { Users, UserCheck, Stethoscope, FlaskConical } from 'lucide-react';

const UserRoles: React.FC = () => {
  const roles = [
    {
      title: "Patient/User",
      icon: Users,
      color: "bg-blue-500",
      description: "Will receive reminders and track medication taking",
      details: "Will get personalized medication reminders and easily mark doses as taken, skipped, or snoozed"
    },
    {
      title: "Receptionist",
      icon: UserCheck,
      color: "bg-teal-500",
      description: "Will register new patients",
      details: "Will quickly register patients with name and phone number to get them started in the system"
    },
    {
      title: "Doctor",
      icon: Stethoscope,
      color: "bg-green-500",
      description: "Will prescribe and schedule medication",
      details: "Will select patients, choose medicines, and set personalized medication schedules"
    },
    {
      title: "Pharmacist",
      icon: FlaskConical,
      color: "bg-purple-500",
      description: "Will manage the master database",
      details: "Will maintain up-to-date medicine information, images, and dosage details"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Four Key Users
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our app brings together healthcare professionals and patients in a seamless workflow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:border-gray-200 h-full">
                <div className={`${role.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <role.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-blue-600 font-semibold mb-3">{role.description}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{role.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserRoles;