import './App.css';
import Header from './components/Header';
import Menubar from './components/Menubar';
import PaymentsScreen from './pages/PaymentsScreen';

function App() { 
  
  return (
    <div className="flex h-screen">
      <Menubar />

      <div className="flex flex-col flex-1 overflow-auto pl-[14rem] lg:pl-0 bg-[#FAFAFA]">
        <Header />
        <PaymentsScreen />
      </div>
    </div>
  );
}

export default App;
