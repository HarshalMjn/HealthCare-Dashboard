import React, { useEffect, useState, useRef } from 'react';
import { BiSolidUpArrow } from "react-icons/bi";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import fetchPatientData from '../../utils/api';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BloodPressureChart = () => {
    const [chartData, setChartData] = useState(null);
    const [systolic, setSystolic] = useState(null);
    const [diastolic, setDiastolic] = useState(null);
    const chartContainerRef = useRef(null);

    useEffect(() => {
        const getPatientData = async () => {
            try {
                const data = await fetchPatientData();
                const jessicaData = data.find(patient => patient.name === 'Jessica Taylor');

                if (jessicaData) {
                    const labels = jessicaData.diagnosis_history.slice(-6).map(entry => `${entry.month}, ${entry.year}`);
                    const systolicData = jessicaData.diagnosis_history.slice(-6).map(entry => entry.blood_pressure.systolic.value);
                    const diastolicData = jessicaData.diagnosis_history.slice(-6).map(entry => entry.blood_pressure.diastolic.value);

                    const data = {
                        labels,
                        datasets: [
                            {
                                label: 'Systolic',
                                data: systolicData,
                                backgroundColor: "rgba(227, 91, 174, 0.5)",
                                borderColor: '#e35bae',
                                borderWidth: 2,
                                fill: true,
                                tension: 0.4,
                                pointBackgroundColor: '#e35bae',
                                pointBorderColor: '#e35bae',
                                pointBorderWidth: 2,
                                pointHoverBackgroundColor: '#e35bae',
                                pointHoverBorderColor: '#e35bae',
                                pointHoverBorderWidth: 2,
                                pointHoverRadius: 5,
                                pointRadius: 3,
                                pointStyle: 'circle',
                            },
                            {
                                label: 'Diastolic',
                                data: diastolicData,
                                backgroundColor: 'rgba(155, 156, 227, 0.5)',
                                borderColor: '#9b9ce3',
                                borderWidth: 2,
                                fill: true,
                                tension: 0.4,
                                pointBackgroundColor: '#9b9ce3',
                                pointBorderColor: '#9b9ce3',
                                pointBorderWidth: 2,
                                pointHoverBackgroundColor: '#9b9ce3',
                                pointHoverBorderColor: '#9b9ce3',
                                pointHoverBorderWidth: 2,
                                pointHoverRadius: 5,
                                pointRadius: 3,
                                pointStyle: 'circle',
                            },
                        ],
                    };

                    setChartData(data);

                    // Set the latest systolic and diastolic values
                    setSystolic(systolicData[systolicData.length - 1]);
                    setDiastolic(diastolicData[diastolicData.length - 1]);
                }
            } catch (error) {
                console.error('Error fetching patient data:', error);
            }
        };

        getPatientData();
    }, []);

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Add this to ensure the chart resizes properly
        plugins: {
            legend: {
                display: false, // Hide legend
            },
        },
        scales: {
            y: {
                min: 60,
                max: 180,
                ticks: {
                    stepSize: 20,
                    color: '#6b7280', // Tailwind Gray-500
                },
            },
            x: {
                ticks: {
                    color: '#6b7280', // Tailwind Gray-500
                },
            },
        },
    };

    useEffect(() => {
        if (chartContainerRef.current) {
            chartContainerRef.current.style.height = '298px'; // Adjust the height as needed
            chartContainerRef.current.style.width = '600px'; // Adjust the width as needed
        }
    }, [chartData]);

    return (
        <div className='bg-pink-100 p '>
            <p className='font-semibold text-xl mb-1 ml-6 mt-6 text-textblack-1 inline'>Blood Pressure
            
            <span className='ml-44 font-thin text-sm '>Last 6 months </span>
           
            </p>
            
           
            <div className="flex items-center ">
                <div ref={chartContainerRef} className="relative ">
                
                    {chartData ? (
                        <Line data={chartData} options={options} />
                    ) : (
                        <p>Loading...</p>
                    )}
                     
                </div>
              
                <div className='w-1/4 flex flex-col justify-center  -ml-5 -mt-1 space-y-4  '>
                    <div>
                        <div className="flex items-center mb-2">
                            <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                            <p className="text-textblack-1">Systolic</p>
                        </div>
                        <p className="text-2xl font-bold mt-3 ">{systolic}</p>
                        <p className="text-sm text-gray-500 mt-3">
                            <span className='flex items-baseline'>
                            <BiSolidUpArrow size={10}/>
                            Higher than Average
                            </span>
                        </p>
                    </div>
                    <div className='w-35 h-[1px] bg-line '></div>
                    <div>
                        <div className="flex items-center mb-2">
                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                            <p className="text-textblack-1">Diastolic</p>
                        </div>
                        <p className="text-2xl font-bold mt-3">{diastolic}</p>
                        <p className="text-sm text-gray-500 mt-3">
                            <span className='flex items-baseline'>
                            <BiSolidUpArrow size={10}/>
                            Lower than Average
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloodPressureChart;
