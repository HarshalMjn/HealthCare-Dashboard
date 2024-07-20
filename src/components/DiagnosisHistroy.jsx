import React, { useEffect, useState } from 'react';
import BloodPressureChart from './Graph/BloodPressureChart';
import Cards from "./Cards";
import fetchPatientData from '../utils/api';
import HeartBPM from "../assets/cardsImg/HeartBPM.png";
import TemperatureHigh from "../assets/cardsImg/temperature.png";
import Lungs from "../assets/cardsImg/respiratory rate.png";

const DiagnosisHistory = ({ className }) => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPatientData();
        const jessicaData = data.find(patient => patient.name === 'Jessica Taylor');
        setPatientData(jessicaData);
      } catch (error) {
        console.log("Error fetching patient data", error);
      }
    };
    getData();
  }, [patientData]);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  const recentDiagnosis = patientData.diagnosis_history[0];
  const { respiratory_rate, heart_rate, temperature } = recentDiagnosis;

  return (
    <div className= " m-6 w-[750px] mt-8 p-6 bg-white-1 rounded-xl shadow-md flex flex-col ">
      <h1 className='font-bold mb-4 font-manrope opacity-100 text-2xl text-textblack-1 p-1'>Diagnosis History</h1>
      <BloodPressureChart />
      <div className='mt-2 flex'>
        <Cards
          icon={Lungs}
          title="Respiratory Rate"
          value={respiratory_rate.value}
          unit="bpm"
          status={respiratory_rate.levels}
          backgroundColor="#E0F3FA"
        />
        <Cards
          icon={TemperatureHigh}
          title="Temperature"
          value={temperature.value}
          unit="°F"
          status={temperature.levels}
          backgroundColor="#FFE6E9"
        />
        <Cards
          icon={HeartBPM}
          title="Heart Rate"
          value={heart_rate.value}
          unit="bpm"
          status={heart_rate.levels}
          backgroundColor="#FFE6F1"
        />
      </div>
    </div>
  );
}

export default DiagnosisHistory;
