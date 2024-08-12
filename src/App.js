import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const[mode,setMode]= useState('light');
  useEffect(() => {
    if (mode === 'light') {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }
  }, [mode]);
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      showAlert("Light Mode has been enabled","success");
    }
  }
  const[alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/about" element={
          <div className='container my-5'>
          <About/>
          </div>}>
        </Route>
        <Route exact path="/" element={
          <div className="container my-5">
          <TextForm showAlert={showAlert} h1="Enter the text below" h2="Text details" button1='Convert to Uppercase' button2='Convert to Lowercase'/>
          </div>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
