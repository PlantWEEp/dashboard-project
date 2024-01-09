import './App.css';
import Header from './components/Header';
import Menubar from './components/Menubar';
import PaymentsScreen from './pages/PaymentsScreen';

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar / Menubar */}
      <Menubar />

      <div className="flex flex-col flex-1 overflow-auto">
        {/* Header */}
        <Header />

        {/* Main Content / Screens */}
        <PaymentsScreen />
      </div>
    </div>
  );
}

export default App;
