// Header component
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown } from "react-icons/io";
import { LiaQuestionCircle } from 'react-icons/lia';
import PaymentTable from './PaymentTable';
 

export default function PaymentsScreen() {
  return (
    <div className="p-4 w-full px-[32px] py-[32px]">
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
        <div className='grid grid-cols-3 gap-[20px] lg:grid-cols-1 mb-[24px] mt-[24px]'>
            <div className='p-[20px] relative bg-[#146EB4] shadow-custom-box text-white rounded-md'>
                <dt className='flex gap-2 items-center'>Next Payout <LiaQuestionCircle/></dt>
                <span className='flex justify-between items-center pt-[16px]'>
                    <h4 className='text-custom-h4 font-medium'>₹2,312.23</h4>
                    <dd className='relative'>23 orders</dd> 
                </span>
                <div className='bg-[#0E4F82] text-custom-ssm flex justify-between py-[8px] absolute w-[100%] left-0 p-2 bottom-[-30px] rounded-md px-[24px]'>
                    <dd>Next payout date:</dd> 
                    <dd>Today, 04:00PM</dd>
                </div>
            </div>
            <div className='p-[20px] bg-white rounded-md shadow-custom-box'>
                <dt className='flex gap-2 items-center'>Amount Pending <LiaQuestionCircle/></dt>
                <span className='flex pt-[16px] pb-[16px] justify-between items-center'>
                    <h4 className='text-custom-h4 font-medium'>₹92,312.20</h4>
                    <dd className='relative text-[#146EB4] '>13 orders</dd> 
                </span>
            </div>
            <div className='p-[20px] bg-white rounded-md shadow-custom-box'>
                <dt className='flex gap-2 items-center'>Amount Processed <LiaQuestionCircle/></dt>
                <span className='flex justify-between items-center pt-[16px]'>
                    <h4 className='text-custom-h4 font-medium'>₹23,92,312.19</h4> 
                </span>
            </div>
        </div>
        <div className='mt-[48px] mb-[24px]'>
            <h5 className='text-custom-h5 font-medium'>Transactions | This Month</h5>
        </div>
        <div className='flex gap-[12px] items-center cursor-pointer font-medium'>
            <p className='bg-skin-greybg text-[#808080] pt-[6px] pb-[9px] rounded-full px-[16px]'>Payouts (22)</p>
            <p className='bg-[#146EB4] text-white py-[6px] rounded-full px-[16px]'>Refunds (6)</p>
        </div>
        <div className='mt-[32px] bg-[#fff] p-[12px] shadow-custom-box'>
            <div className='relative'>
            <input type='text' placeholder='Order ID or transaction ID' className=' text-custom-ssm border-[#D9D9D9] border w-[250px] h-[40px] px-9 rounded-md text-start py-[7px] bg-[#FFFFFF]' id='search' />
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <CiSearch className='' />
                </div>
            </div>
            <PaymentTable/>
        </div>
    </div>
  );
}
