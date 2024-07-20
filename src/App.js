import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled", "success")

      // For TextBox background color
      // let textBox = document.getElementById('myBox')
      // textBox.style.backgroundColor = 'grey'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      // For TextBox background color
      // let textBox = document.getElementById('myBox')
      // textBox.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="Textutils" aboutText="AboutText" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <div className="container col-9 mt-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={ <About mode={mode} /> }/> */}
          {/* </Routes> */}
          {/* <Routes> */}
            {/* <Route exact path="/" element={ <TextForm heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces, Copy Text" showAlert={showAlert} mode={mode} /> }/> */}
          {/* </Routes> */}
          <TextForm heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces, Copy Text" showAlert={showAlert} mode={mode} />
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
