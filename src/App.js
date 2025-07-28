import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  const [bPurple, setbPurple] = useState('Enable Purple mode');
  const [btnPurple, setbtnPurple] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const togglePurple = () => {
    if (btnPurple.backgroundColor === 'white') {
      setbtnPurple({
        color: '#3b0764',
        backgroundColor: '#f3e8ff',
      });
      setMode('purple');
      setbPurple('Disable Purple mode');
      document.body.style.backgroundColor = '#f3e8ff';
      document.body.style.color = '#3b0764';
      showAlert('Purple mode has been enabled', 'success');
    } else {
      setbtnPurple({
        color: 'black',
        backgroundColor: 'white',
      });
      setMode('light');
      setbPurple('Enable Purple mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  const btnStyle = {
    backgroundColor:
      mode === 'dark' ? 'blue' : mode === 'purple' ? 'purple' : 'white',
    color: mode === 'dark' || mode === 'purple' ? 'white' : 'black',
    border: '1px solid',
    borderColor:
      mode === 'dark' ? 'white' : mode === 'purple' ? 'white' : '#042743',
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title=" ⚡TURBO TEXTER⚡"
        mode={mode}
        toggleMode={toggleMode}
        togglePurple={togglePurple}
        aboutText="About"
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route */}
        {/* exact */}
        {/* path="/" */}
        {/* element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
          btnStyle={btnStyle}
        />
        {/* } */}
        {/* /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
