// src/components/Search.js

import React, { useEffect, useState } from 'react';
import { GoSearch } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import fetchPatientData from '../utils/api';

const Search = () => {
  const [patientData, setPatientData] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const getPatientData = async () => {
      try {
        const data = await fetchPatientData();
        setPatientData(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    getPatientData();
  }, []);

  const handlePatientClick = (index) => {
    setSelectedPatient(index);
  };

  return (
    <div className='flex  flex-col w-[310px] ml-3 mt-7 mx-auto bg-white-1 shadow-md rounded-3xl overflow-hidden'>
      <div className='flex items-center justify-between p-4'>
        <span className="text-3xl font-bold">Patients</span>
        <div className='flex items-center rounded-lg p-2'>
          <GoSearch size={20} className='ml-2 cursor-pointer' />
        </div>
      </div>

      <div className="overflow-y-scroll custom-scrollbar" style={{ maxHeight: '75vh' }}>
        {patientData ? (
          patientData.map((patient, index) => (
            <div
              key={index}
              onClick={() => handlePatientClick(index)}
              className={`p-4 flex items-center justify-between cursor-pointer ${
                index === selectedPatient ? 'bg-green-1' : ''
              }`}
            >
              <div className="flex items-center">
                {patient.profile_picture ? (
                  <img src={patient.profile_picture} alt={patient.name} className="w-10 h-10 rounded-full mr-2" />
                ) : (
                  <MdPerson className='w-10 h-10 rounded-full mr-2' />
                )}
                <div className="flex flex-col ml-2">
                  <div className="font-semibold">{patient.name}</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <span className="text-gray-1">{patient.gender},</span>
                    <span className='text-gray-1'>{patient.age}</span>
                  </div>
                </div>
              </div>
              <BsThreeDots size={20} className='ml-2 cursor-pointer' />
            </div>
          ))
        ) : (
          <p className="p-4 text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Search;
