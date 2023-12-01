import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
/* import HeroSection from './components/HeroSection'; */
import Navbar from './components/Navbar';
/* import FontExamples from './components/FontExamples';
import HomePage from './pages/HomePage';
import ContactForm from './pages/ContactForm';
import AboutPage from './pages/AboutPage';
import Portfolio from './pages/Portfolio'; */
import ViewMore from './pages/ViewMore';
import Test from './pages/Test';
import MainComponent from './MainComponent';

function App() {
  const [viewMore, setViewMore] = useState(false);
  useEffect(() => {
    const checkUrl = () => {
      window.location.href.includes('view-more') ? setViewMore(true) : setViewMore(false);
    };
    checkUrl();

    // Set up an interval to check the URL every second
    const intervalId = setInterval(checkUrl, 1000);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
    {!viewMore && 
      <Navbar />
    }
    
    {/* <HomePage />
    <Portfolio />
    <AboutPage />
    <ContactForm />
    <HeroSection /> */}
      <Routes>
        {/* <Route path='/' element={<HomePage />} />
        <Route path='/fonts' element={<FontExamples />} />
        <Route path='/hero' element={<HeroSection />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/portfolio' element={<Portfolio />} /> */}
        <Route path='/' element={<MainComponent />} />
        <Route path='/view-more/:project' element={<ViewMore />} />
        <Route path='/test' element={<Test />} />
      </Routes>

    </>
  );
}

export default App;
