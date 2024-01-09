import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Menubar from './components/Menubar';
import PaymentsScreen from './pages/PaymentsScreen';

function App() { 
  
  

  return (
    <div className="flex h-screen">
      <Menubar/>

      <div className="flex flex-col flex-1 overflow-auto pl-[14rem] lg:pl-0 bg-[#FAFAFA]">
        <Header/>
        <PaymentsScreen/>
      <div className='text-center mt-[-28px] py-4'> Made by <a href='mailto:vaishnav0931@gmail.com' className=' underline '>Vaishnav</a> <a href='https://github.com/PlantWEEp/dukaan-frontend--assignment' className=' underline ' target='_blank'>Github</a></div> 
      </div>
    </div>
  );
}

export default App;
