// Header component
import React from 'react';
 

export default function PaymentsScreen() {
  return (
    <div className="p-4 w-full px-7 py-4">
        <div className='flex justify-between items-center'>
            <h5 className='text-xl text-black'>Overview</h5>
            <div className='relative'>
        <div className='border-2 relative'>
            <select className='pr-[30px] pl-[10px] py-2 appearance-none bg-transparent border-none w-full'>
            <option value="Last Month">Last Month</option>
            <option value="Last Week">Last Week</option>
            <option value="Last Year">Last Year</option>
            </select>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <svg
                className='h-5 w-5 text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
            >
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'
                />
            </svg>
            </div>
        </div>
        </div>

        </div>
        <div className='grid grid-cols-2'>
            <div>
                sda
            </div>
            <div>
                sads
            </div>
        </div>
    </div>
  );
}
