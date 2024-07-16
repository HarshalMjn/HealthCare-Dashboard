import React, { useEffect, useState } from 'react';
import { GoSearch } from "react-icons/go";
import { MdPerson } from "react-icons/md";
import layer1 from '../assets/images/Layer 1.png';
import layer2 from '../assets/images/Layer 2.png';
import layer3 from '../assets/images/Layer 3.png';
import layer4 from '../assets/images/Layer 4.png';
import layer5 from '../assets/images/Layer 5.png';
import layer6 from '../assets/images/Layer 6.png';
import layer7 from '../assets/images/Layer 7.png';
import layer8 from '../assets/images/Layer 8.png';
import layer9 from '../assets/images/Layer 9.png';
import layer10 from '../assets/images/Layer 10.png';
import layer11 from '../assets/images/Layer 11.png';
import layer12 from '../assets/images/Layer 12.png';

const Username = 'coalition';
const Password = 'skills-test';
const basicAuth = btoa(`${Username}:${Password}`);

const patientImages = [
  layer1, layer2, layer3, layer4, layer5, layer6, layer7, layer8, layer9, layer10, layer11, layer12 
];

const Search = () => {
  const [patientData, setPatientData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: {
            'Authorization': `Basic ${basicAuth}`
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const mergedData = data.map((patient, index) => ({
          ...patient,
          image: patientImages[index]
        }));
        setPatientData(mergedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePatientClick = (index) => {
    setSelectedPatient(index);
  };

  const filteredPatients = patientData?.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex flex-col w-[367px] ml-3 mt-7 mx-auto bg-white-1 shadow-md rounded-3xl overflow-hidden'>
      <div className='flex items-center justify-between p-4 '>
        <span className="text-3xl font-bold">Patients</span>
        <div className='flex items-center rounded-lg p-2'>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className='outline-none'
        
            
          />
          <GoSearch size={20} className='ml-2' />
        </div>
      </div>

      <div className="overflow-y-auto custom-scrollbar" style={{ maxHeight: '75vh' }}>
        {filteredPatients ? (
          filteredPatients.map((patient, index) => (
            <div
              key={index}
              onClick={() => handlePatientClick(index)}
              className={`p-4 flex items-center cursor-pointer ${
                index === selectedPatient ? 'bg-green-1' : ''
              }`}
            >
              {patient.image ? (
                <img src={patient.image} alt={patient.name} className="w-10 h-10 rounded-full mr-2" />
              ):(<MdPerson className='w-10 h-10 rounded-full mr-2'/>)}
              <div className="flex flex-col ml-2">
                <div className="font-semibold">{patient.name}</div>
                <div className="text-sm text-gray-500 flex items-center">
                  <span className="text-gray-1">{patient.gender},</span>
                  <span className='text-gray-1'>{patient.age}</span>
                </div>
              </div>
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
