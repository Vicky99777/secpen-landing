import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Cybersecurity from './components/Cybersecurity';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Dashboard />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;