import React from 'react';
import Data from '../constant/ConstantData';

export default function PaymentTable() {
  return (
    <>
      <div>
      <table className='mt-[12px] w-full text-custom-ssm table-fixed'> 
          <tr className='h-[48px] whitespace-nowrap px-[14px] bg-[#F2F2F2]'>
            <th className='h-[48px] whitespace-nowrap w-[150.67px] px-[14px] text-start bg-[#F2F2F2]'>Order ID</th>
            <th className='h-[48px] whitespace-nowrap w-[150.67px] text-start bg-[#F2F2F2]'>Status</th>
            <th className='h-[48px] whitespace-nowrap w-[150.67px] text-start bg-[#F2F2F2]'>Transaction ID</th>
            <th className='h-[48px] whitespace-nowrap w-[150.67px] text-start bg-[#F2F2F2]'>Refund Date</th>
            <th className='h-[48px] whitespace-nowrap w-[150.67px] text-start bg-[#F2F2F2]'>Order Amount</th>
          </tr> 
        <tbody>
          {Data.map((order) => (
            <tr className='hover:bg-[#9fbfff25] whitespace-nowrap border-b border-solid border-gray-300' key={order.id}>
              <td className='h-[48px] text-[#146EB4] font-[500] w-[150.67px] px-[14px] py-[12px] text-start'>{order['Order ID']}</td>
              <td className='h-[48px] flex items-center gap-[6px]'>
                {order.Status === 'Successful' && (
                    <span className='bg-[#17B31B] w-2 h-2 rounded-full ml-1'></span>
                )}
                {order.Status === 'Processing' && (
                    <span className='bg-[#999999] w-2 h-2 rounded-full ml-1'></span>
                )}
                {order.Status}
                </td>
              <td className='h-[48px] text-[#4D4D4D]'>{order['Transaction ID']}</td>
              <td className='h-[48px]'>{order['Refund date']}</td>

              <td className='h-[48px]v '>{order['Order amount']}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}
