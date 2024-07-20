import React, { useState } from 'react';
import logo from "../assets/TestLogo.svg";
import docImg from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import home from "../assets/home.svg";
import group from "../assets/group.svg";
import schedule from "../assets/calendar.svg";
import msg from "../assets/chat_bubble.svg";
import credit from "../assets/credit_card.svg";
import setting from "../assets/settings.svg";
import more from "../assets/more_vert_.svg";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative font-manrope">
      <nav className="flex m-2 items-center justify-between bg-white shadow p-3 rounded-full">
        <div className="flex items-center  space-x-4">
          <img src={logo} alt="Logo"  className='w-15 h-15' />
        </div>

        <div className={`flex-col md:flex md:flex-row space-x-8 hidden mt-4 md:mt-0`}>
          <a href="/" className="flex items-center text-gray-800 hover:text-gray-600 p-2">
            <img src={home} alt="Home" className="mr-2" />
            Overview
          </a>
          <a href="/" className="flex items-center text-gray-800 hover:text-gray-600 bg-newcol-1  p-2 rounded-full">
            <img src={group} alt="Patients" className="mr-2" />
            Patients
          </a>
          <a href="/" className="flex items-center text-gray-800 hover:text-gray-600">
            <img src={schedule} alt="Schedule" className="mr-2" />
            Schedule
          </a>
          <a href="/" className="flex items-center text-gray-800 hover:text-gray-600">
            <img src={msg} alt="Messages" className="mr-2" />
            Messages
          </a>
          <a href="/" className="flex items-center text-gray-800 hover:text-gray-600">
            <img src={credit} alt="Transactions" className="mr-2" />
            Transactions
          </a>
        </div>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <img src={docImg} alt="Profile" className=" h-8 w-8 rounded-full hidden md:block" />
          <div className="text-gray-800">
            <p className="font-semibold">Dr. Jose Simmons</p>
            <p className="text-sm">General Practitioner</p>
          </div>
          <img src={setting} alt="Settings" className="h-6 w-6 hidden lg:block" />
          <img src={more} alt="More" className="h-6 w-6 hidden lg:block" />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <IoIosMenu className='w-6 h-6' />
          </button>
        </div>
      </nav>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10" onClick={() => setIsSidebarOpen(false)}>
          <div className="fixed inset-y-0 left-0 w-64 bg-gray-1 shadow-lg p-4 z-20" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsSidebarOpen(false)} className="text-gray-600 hover:text-gray-800 mb-4">Close</button>
            <a href="/" className=" text-gray-800 hover:text-gray-600 mb-2 flex items-center">
              <img src={home} alt="Home" className="mr-2" />
              Overview
            </a>
            <a href="/" className=" text-gray-800 hover:text-gray-600 mb-2 flex items-center">
              <img src={group} alt="Patients" className="mr-2" />
              Patients
            </a>
            <a href="/" className=" text-gray-800 hover:text-gray-600 mb-2 flex items-center">
              <img src={schedule} alt="Schedule" className="mr-2" />
              Schedule
            </a>
            <a href="/" className=" text-gray-800 hover:text-gray-600 mb-2 flex items-center">
              <img src={msg} alt="Messages" className="mr-2" />
              Messages
            </a>
            <a href="/" className=" text-gray-800 hover:text-gray-600 mb-2 flex items-center">
              <img src={credit} alt="Transactions" className="mr-2" />
              Transactions
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
