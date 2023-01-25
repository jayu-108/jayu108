import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }

  const toggleModeRed = ()=>{
    setMode('dark')
    document.body.style.backgroundColor = '#dc3545'
    showAlert("Red Theme has been enabled", "success")
  }
  
  const toggleModeYel = ()=>{
    setMode('dark')
    document.body.style.backgroundColor = '#ffc107'
    showAlert("Yellow Theme has been enabled", "success")
  }

  const toggleModeGreen = ()=>{
    setMode('dark')
    document.body.style.backgroundColor = '#198754'
    showAlert("Green Theme has been enabled", "success")
  }
  
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed}
      toggleModeYel={toggleModeYel} toggleModeGreen={toggleModeGreen}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm  showAlert={showAlert} heading="Enter Text To Analyze Below" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
