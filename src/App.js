import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
      showAlert('Dark Mode Has Been Enabled', "success :")
      document.title = 'Textuils - Dark Mode'

    } else {
      setMode('light')
      document.body.style.backgroundColor = '#f8f9fa'
      document.body.style.color = 'black'
      showAlert('Light Mode Has Been Enabled', "success :")
      document.title = 'Textuils - Light Mode'
    }
  }
  return (
      <Router>
        <Navbar title="TextUtils" txtAbout="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <TextForm heading="Operations On Text !!" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
