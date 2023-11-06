import './App.css';
import { Routes, Route } from 'react-router-dom';

import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import FontExamples from './components/FontExamples';
import HomePage from './pages/HomePage';
import ContactForm from './pages/ContactForm';
import AboutPage from './pages/AboutPage';
import Portfolio from './pages/Portfolio';
import ViewMore from './pages/ViewMore';
import Test from './pages/Test';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/fonts' element={<FontExamples />} />
        <Route path='/hero' element={<HeroSection />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/view-more/:project' element={<ViewMore />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
