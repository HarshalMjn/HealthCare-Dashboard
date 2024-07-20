import React, { useEffect, useState } from 'react';
import fetchPatientData from '../utils/api';

const DiagnosticList = () => {
  const [patientData, setPatientData] = useState(null);
  const [diagnosticList, setDiagnosticList] = useState(null);

  useEffect(() => {
    const getPatientData = async () => {
      try {
        const data = await fetchPatientData();
        const jessicaData = data.find(patient => patient.name === 'Jessica Taylor');
        if (jessicaData) {
          setPatientData(jessicaData);
          setDiagnosticList(jessicaData.diagnostic_list);
        }
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    getPatientData();
  }, []);

  return (
    <div className=" bg-white-1 m-4 mt-9 shadow-md rounded-lg p-4 font-manrope">
      <h2 className="text-2xl font-semibold mb-6 text-center">Diagnostic List</h2>
      <div className="relative">
        <div className="flex font-semibold bg-white-2 p-4 rounded-t-xl shadow text-center">
          <div className="w-1/3">Problem/Diagnosis</div>
          <div className="w-1/3">Description</div>
          <div className="w-1/3">Status</div>
        </div>
        <div className='overflow-y-scroll custom-scrollbar' style={{ maxHeight: '200px' }}>
          {diagnosticList ? (
            <div>
              {diagnosticList.map((diagnostic, index) => (
                <div key={index} className="flex p-4 bg-white-1 text-center">
                  <div className="w-1/3 flex items-center justify-center">{diagnostic.name}</div>
                  <div className="w-1/3 flex items-center justify-center">{diagnostic.description}</div>
                  <div className="w-1/3 flex items-center justify-center">{diagnostic.status}</div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticList;
