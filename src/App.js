import React from 'react';
import './App.css';
import "./tailwind.css"
import Navbar from './components/Navbar'; // Ensure Navbar is correctly imported
import Search from './components/Search';
import ProfileCard from './components/ProfileCard';
import DiagnosisHistroy from './components/DiagnosisHistroy';
import DiagnosticList from './components/DiagosticList';
import LabResults from './components/LabResults';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="flex justify-center ">
        <Search />
        <div>
       <DiagnosisHistroy/>
       <DiagnosticList/>
       </div>
       <div>
       <ProfileCard  />
        <LabResults/> 

       </div>
      
       
      
     </div>
    

    </div>
  );
}

export default App;
