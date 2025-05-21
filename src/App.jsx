import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmistatus] = useState("");
  const [errormsg, setErrormsg] = useState("");


  const calculatebmi=()=>{
    const isvalidheight=/^\d+$/.test(height);
    const isvalidweight=/^\d+$/.test(weight);
      if(isvalidheight && isvalidweight){
        const heightInMeters=height/100;
        const bmival=weight/(heightInMeters*heightInMeters);
        setBmi(bmival.toFixed(2));
        if(bmival<18.5)
          setBmistatus("Under Weight");
        else if(bmival>=18.5 && bmival<=24.9)
          setBmistatus("Normal Weight");
        else if(bmival>=25 && bmival<29.9)
          setBmistatus("Over Weight");
        else
          setBmistatus("Obese");
        setErrormsg("");
      }
      
      else{
        setBmi(null);
        setBmistatus("");
        setErrormsg("Please Enter valid input's")
      }
  };

  return (
    <>
      <div className='bmi-calculator'>
        <div className="box"></div>
          <div className="data">
            <h1>BMI Calculator</h1>

            {errormsg && <p className='error'>{errormsg}</p>}
            <div className="input-container">
              <label htmlFor="height">Height (cm):</label>
              <input type="text" id='height' value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className="input-container">
              <label htmlFor="weight">Weight (kg):</label>
              <input type="text" id='weight' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <button onClick={calculatebmi}>Calculate BMI</button>
            {bmi!==null && (
              <div className="result">
              <p>Your BMI is: {bmi}</p>
              <p>Status: {bmistatus}</p>
            </div>
            )}
          </div>
      </div>
    </>
  )
}

export default App
