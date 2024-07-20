import React, { useEffect, useState } from 'react';
import fetchPatientData from '../utils/api';
import { TbDownload } from "react-icons/tb";

const LabResults = () => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const getPatientData = async () => {
      try {
        const data = await fetchPatientData();
        console.log(data);
        const jessicaData = data.find(patient => patient.name === 'Jessica Taylor');
        setPatientData(jessicaData);
        console.log(jessicaData);
      } catch (error) {
        console.log("jessicaData Empty");
      }
    };
    getPatientData();
  }, []);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  const { lab_results } = patientData;
  console.log(lab_results);

  return (
    <div className='w-[340px] mr-3 font-manrope bg-white-1 shadow-lg rounded-3xl mt-6'>
      <h1 className='p-6 font-bold text-xl'>Lab Results</h1>
      <div className="h-auto ">
        {lab_results.map((result, index) => (
          <div className="flex justify-between p-3" key={index}>
            <span>{result}</span>
            <TbDownload size={20} className='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
