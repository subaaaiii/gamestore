import React from "react";
import logo from "../assets/logo/download.png";
import { IoIosArrowDown, IoIosArrowUp, IoMdNotifications, IoMdSearch } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import lovebird from "../assets/lovebird.jpg";
import { useState, } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="w-full justify-between items-center px-32 py-4 flex mx-auto shadow-md">
      <div className="flex gap-4 items-center">
        <img className="w-[120px] h-[45px]" src={logo} alt="" />
        <div className={`w-[550px] border p-1 ${!dropdownOpen? 'rounded-full' : 'rounded-t-3xl'} flex  gap-2 `}>
          <input
            className="text-l font-[300] flex-grow ml-4 focus:outline-none"
            type="text"
            placeholder="Search games in G2G"
          />
          <div className="flex items-center gap-2">
            <button
              className="bg-[#f7f7f9] px-4 py-2 rounded-3xl flex justify-between gap-5 items-center"
              onClick={toggleDropDown}
            >
              <div className="font-medium">All services</div>
              {dropdownOpen? <IoIosArrowUp size={20} /> :  <IoIosArrowDown size={20} /> }
             
            </button>
            <button className="bg-[#f03827] rounded-full p-2">
              <IoMdSearch size={20} color="white" />
            </button>
          </div>
          {dropdownOpen && (
            <div className="absolute mt-11 left-[264px] w-[550px] border bg-white shadow-lg  z-10">
              <a href="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 1</a>
              <a href="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 2</a>
              <a href="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 3</a>
            </div>
          )}
        </div>
      </div>
      <div className="items-center flex gap-4">
        <button className="px-10 py-2.5 bg-[#f03827] rounded-3xl font-medium text-white">
          Sell
        </button>

        <div className="bg-[#f7f7f9] p-3 rounded-full">
          <AiFillMessage color="#777777" size={25} />
        </div>
        <div className="bg-[#f7f7f9] p-3 rounded-full">
          <IoMdNotifications color="#777777" size={25} />
        </div>
        <img
          className=" border rounded-full w-[50px] h-[50px]"
          src={lovebird}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
