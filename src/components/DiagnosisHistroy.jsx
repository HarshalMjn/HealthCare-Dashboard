import React from 'react';
import BloodPressureChart from './Graph/BloodPressureChart';
import Cards from "./Cards"

const DiagnosisHistory = () => {
  return (
    <div className='w-[766px] p-3 m-4  bg-white-1 rounded-xl  mt-8  shadow-md'>
      <h1 className='font-bold text-2xl text-textblack-1 p-1'>Diagnosis History</h1>
      <BloodPressureChart />
      <Cards/>
    </div>
  );
}

export default DiagnosisHistory;
