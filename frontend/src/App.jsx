// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './pages/HeroSection/HeroSection';
import AwardsSection from './pages/AwardsSection/AwardsSection';
import IntroSection from './pages/IntroSection/IntroSection';
import Footer from './components/Footer/Footer'; // 1. 引入 Footer
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="scroll-container">
        <HeroSection />
        <AwardsSection />
        <IntroSection />
        <Footer /> {/* 2. 在最后添加 Footer 组件 */}
      </main>
    </>
  );
}

export default App;