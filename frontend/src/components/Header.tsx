import React from 'react';
import { TfiAnnouncement } from 'react-icons/tfi';
import { MdMenu, MdOutlineExpandMore } from 'react-icons/md';
import { LiaQuestionCircle } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <>
      <header className='flex justify-between w-[100%] items-center px-7 py-4 h-[67px] border-b-[1.5px] border-[#00000046]'>
        <ul className='flex gap-3 relative items-center font-regular'>
        <li className='text-xl hidden lg:block'><MdMenu/></li>
          <li className='text-xl'>Payments</li>
          <li className='text-sm relative flex items-center gap-1'>
          <LiaQuestionCircle className='before:absolute before:text-custom-sm before:content-[<CiCircleInfo />]' />
            How it works
          </li>
        </ul>
        <div className='relative'>
          <input type='text' placeholder='Search features, tutorials, etc.' className='bg-skin-greybg w-[450px] px-9 rounded-md text-start py-[7px]' id='search' />
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <CiSearch className='text-gray-500' />
        </div>
        </div>
        <div className='flex gap-3 items-center'>
            <div className="bg-skin-greybg p-3 text-custom-sm rounded-full">
          <TfiAnnouncement /> 
            </div>
            <div className="bg-skin-greybg p-3 text-custom-sm rounded-full">
            <MdOutlineExpandMore />
            </div>
        </div>
      </header>
    </>
  );
}
