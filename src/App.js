import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Analytics } from "@vercel/analytics/react";
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import JobForum from './components/JobForum';
import JobApplication from './pages/JobApplication';
import Gallery from './components/Gallery/Gallery';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import ChatBot from './components/ChatBot';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Naatscorp Pvt Ltd");

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path="/careers" element={<JobForum />} />
            <Route path="/apply/:jobId" element={<JobApplication />} />
          </Routes>
        </ScrollToTop>
        <ChatBot />
        <Analytics />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
