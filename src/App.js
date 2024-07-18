// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ContactForm from './components/ContactForm';
import SurveyForm from './components/SurveyForm';
import logo192 from './logo192.png';

const App = () => {
  return (
    <div className="flex  h-screen flex-1 overflow-y-auto">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4">
          <Dashboard />
          <div className="mt-4 grid grid-cols-2 gap-4">
            <ContactForm />
            <SurveyForm />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
