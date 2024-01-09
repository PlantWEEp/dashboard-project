import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { FaTruck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { IoCashOutline } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { BiArrowBack, BiBrush } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai"; 
import { CiWallet } from "react-icons/ci"; 
import { TfiAnnouncement } from "react-icons/tfi";
import Header from './Header';
export default function Menubar() {

    const users: { id: number, image: any, name: string, link: string }[] = [
        {
            id: 1,
            image: "https://res.cloudinary.com/drudtvcpf/image/upload/v1704821813/ngxdz67tdwubeimxsdy0.png",
            name: "Nishyan",
            link: "Visit store"
        }
    ];

    const wallets: { id: number, icon: any, credits: string, price: string }[] = [
        {
            id: 1,
            icon: <CiWallet />,
            credits: "Available credits",
            price: "222.10"
        }
    ];

    const menu:{id:number,name:string,icons:any,current:boolean,href:string }[] =[
        {id:1,name:"Home",icons:<IoHomeOutline />,current:false,href:"#"},
        {id:2,name:"Orders",icons:<CiViewList />,current:false,href:"#"},
        {id:3,name:"Products",icons:<RxDashboard />,current:false,href:"#"},
        {id:4,name:"Delivery",icons:<FaTruck />,current:false,href:"#"},
        {id:5,name:"Marketing",icons:<TfiAnnouncement />,current:false,href:"#"},
        {id:6,name:"Analytics",icons:<VscGraph />,current:false,href:"#"},
        {id:7,name:"Payments",icons:<IoCashOutline />,current:true,href:"#"},
        {id:8,name:"Tools",icons:<FaTools />,current:false,href:"#"},
        {id:8,name:"Discounts",icons:<CiDiscount1 />,current:false,href:"#"},
        {id:9,name:"Audience",icons:<FaRegUser />,current:false,href:"#"}, 
        {id:10,name:"Appearance",icons:<BiBrush />,current:false,href:"#"},
        {id:11,name:"Plugins",icons:<AiFillThunderbolt />,current:false,href:"#"},
    ]; 
  return (
    <>
       <div className={`bg-skin-base w-[224px] flex justify-between flex-col gap-7 text-skin-base h-screen cursor-pointer p-5 fixed z-10 lg:hidden`}>
            <div>
                <div className='relative'>
                {users.map((user)=>{
                    return(
                        <div className='flex gap-3' key={user.id}>
                            <img src={user.image} alt={user.name} className='w-[30%] object-cover'/>
                            <div className='relative'>
                                <h4>{user.name}</h4>
                                <a href={user.link} className='border-b border-solid before:block before:absolute before:top-0 before:border-1'>
                                {user.link}  
                                </a> 
                            </div>
                        </div>
                    )
                })}
                <div className='absolute top-[25%] right-0 text-custom-h5'><IoIosArrowDown /></div>
                </div>
            <div className='flex gap-2 flex-col mt-[24px]'>
                {menu.map((menuItem) => (
                    <ul>
                    <li><a href='#' 
                    className={`hover:bg-[#ffffff2e] hover:opacity-[100%] opacity-[80%] text-custom-p font-medium transition ease-in-out delay-150 rounded-md px-4 py-2 flex items-center gap-3 ${
                        menuItem.current ? 'bg-[#ffffff36] rounded-md opacity-[100%]' : ''
                    }`}
                    key={menuItem.id}>{menuItem.icons} {menuItem.name}</a></li>
                    </ul>
                ))}
                </div>

            </div>
            <div className='bg-[#ffffff2e] p-3 rounded-lg'>
            {wallets.map((user)=>{
                    return(
                        <div key={user.id} className='flex gap-3 items-center'>
                            <span className='text-custom-lg p-1 rounded-lg bg-[#ffffff2e]'>{user.icon}</span>
                            <div className=''>
                                <h6 className='text-custom-ssm'>{user.credits}</h6>
                                <p className='text-custom-ssm'>{user.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>

  )
}
function setOpen(arg0: boolean) {
    throw new Error('Function not implemented.');
}

