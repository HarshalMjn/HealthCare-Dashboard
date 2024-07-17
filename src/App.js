import React from 'react';
import './App.css';
import "./tailwind.css"
import Navbar from './components/Navbar'; // Ensure Navbar is correctly imported
import Search from './components/Search';
import ProfileCard from './components/ProfileCard';
import DiagnosisHistroy from './components/DiagnosisHistroy';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="flex justify-center items-start ">
        <Search />
        <DiagnosisHistroy/>
        <ProfileCard  />
      
      </div>

    </div>
  );
}

export default App;
