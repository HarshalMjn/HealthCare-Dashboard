import React, { useEffect, useState } from 'react';
import { MdOutlineCalendarToday, MdOutlineCall } from "react-icons/md";
import { BsGenderFemale } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";
import fetchPatientData from '../utils/api';

const ProfileCard = () => {
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        const getPatientData = async () => {
            try {
                const data = await fetchPatientData();
                const jessicaData = data.find(patient => patient.name === 'Jessica Taylor');
                setPatient(jessicaData);
            } catch (error) {
                console.error('Error fetching patient data:', error);
            }
        };
        getPatientData();
    }, []);

    if (!patient) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-[340px] mr-3 mt-5 mx-auto bg-white-1 shadow-lg rounded-3xl">
            <div className="flex items-center justify-center mt-5">
                <img className="w-40 h-40 rounded-full" src={patient.profile_picture} alt={patient.name} />
            </div>
            <div className="p-8">
                <h2 className="text-center text-xl font-bold text-blue-900">{patient.name}</h2>
                <ul className="mt-3 text-sm">
                    <li className="flex items-center space-x-7 p-3">
                        <div className="bg-white-2 p-2 rounded-full">
                            <MdOutlineCalendarToday size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span>Date of Birth</span>
                            <span className="text-blue-900 font-semibold">{patient.date_of_birth}</span>
                        </div>
                    </li>
                    <li className="flex items-center space-x-7 p-3">
                        <div className="bg-white-2 p-2 rounded-full">
                            <BsGenderFemale size={25} />
                        </div>
                        <div className="flex flex-col">
                            <span>Gender</span>
                            <span className="text-blue-900 font-semibold">{patient.gender}</span>
                        </div>
                    </li>
                    <li className="flex items-center space-x-7 p-3">
                        <div className="bg-white-2 p-2 rounded-full">
                            <MdOutlineCall size={25} />
                        </div>
                        <div className="flex flex-col">
                            <span>Contact Info</span>
                            <span className="text-blue-900 font-semibold">{patient.phone_number}</span>
                        </div>
                    </li>
                    <li className="flex items-center space-x-7 p-3">
                        <div className="bg-white-2 p-2 rounded-full">
                            <MdOutlineCall size={25} />
                        </div>
                        <div className="flex flex-col">
                            <span>Emergency Contacts</span>
                            <span className="text-blue-900 font-semibold">{patient.emergency_contact}</span>
                        </div>
                    </li>
                    <li className="flex items-center space-x-7 p-3">
                        <div className="bg-white-2 p-2 rounded-full">
                            <AiOutlineSafety size={25} />
                        </div>
                        <div className="flex flex-col">
                            <span>Insurance Provider</span>
                            <span className="text-blue-900 font-semibold">{patient.insurance_type}</span>
                        </div>
                    </li>
                </ul>
                <div className="mt-4 text-center">
                    <button className="p-2 px-8 bg-newcol-1 text-richBlue-1 font-semibold rounded-3xl">Show All Information</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
