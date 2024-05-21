import logo from './logo.svg';
import './App.css';
import RitsNavBar from './Components/RitsNavBar';
import ButtonsNav from './Components/ButtonsNav';
import ThreeInput from './Components/ThreeInput';
import TimimingBar from './Components/TimimingBar';
import DataTable from './Components/TableWorKList';
import TimingBar from './Components/TimimingBar';
import Modal from './Components/Modal';
import { useState } from 'react';
import MyProvider from './Components/Context/MyProvider';
// import MyProvider from './Components/Context/MyProvider';
// import ChildComponent from './Components/ChildComponent';
// import Table from './Components/BootStrapComponent/Table';

function App() {

  let [isbool,setIsbool]=useState(false);

  let HideTheThreeInputs=()=>
    {
      if(!isbool)
        {

        }

    }


  return (
    <MyProvider>
       <div className="App">
      <header className="App-header">
      <RitsNavBar/>
      <Modal />
      <TimingBar/>
      <ThreeInput/>
      <ButtonsNav />
      <DataTable/>
      {/* <ChildComponent */}
      </header>
    </div>
    </MyProvider>
  //  </MyProvider>
  );
}

export default App;
