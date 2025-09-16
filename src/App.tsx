import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import UserRoles from './components/UserRoles';
import WorkflowTimeline from './components/WorkflowTimeline';
import Benefits from './components/Benefits';
import Screenshots from './components/Screenshots';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* <UserRoles /> */}
      <WorkflowTimeline />
      <Benefits />
      <Screenshots />
      <Footer />
    </div>
  );
}

export default App;