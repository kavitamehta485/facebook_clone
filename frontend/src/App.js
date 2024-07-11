import React from 'react';
import Navbar from './components/Navbar';
import LeftSection from './components/LeftSection';
import CenterSection from './components/CenterSection';
import RightSection from './components/RightSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <LeftSection />
        <CenterSection />
        <RightSection />
      </div>
    </div>
  );
}

export default App;
