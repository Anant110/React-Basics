import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App(props) {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has enabled", "success");
      document.title = 'TextWeb-lightMode'
      setInterval(() => {
        document.title = 'TextWeb-is amazing website'
      }, 2000);
      setInterval(() => {
        document.title = 'TextWeb-is install Now'
      }, 1500);
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = '#090626';
      showalert("Dark Mode has enabled", "success");
      document.title = 'TextWeb-DarkMode'
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextWeb" aboutText="About" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        {/* <Navbar/> */}
        <div className="container">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />}>
            </Route> */}
            {/* <Route path="/" element={<Textform showalert={showalert} heading="Analyze The Text Area" mode={mode} />}>  */}
            <Textform showalert={showalert} heading="Analyze The Text Area" mode={mode}/>    
            {/* </Route> */}
          {/* </Routes> */}
          {/* <About /> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
