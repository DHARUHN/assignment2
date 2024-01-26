import React from 'react'
import {useState} from 'react'
import './Counter.css'
export default function Counter() {

    const [count,setCount]=useState(0);

    const increamentCount = () =>{
      setCount(count+1);
    };

    const decreamentCount = () =>{
      setCount(count-1);
    };

    const resetCount = () =>{
      setCount(0);
    };
  return (
    <div>
      <div className="container">
          <div className="counter-box">
              <h1>COUNTER:{count}</h1>
              <div className="bbutton-container">
                  <button onClick={increamentCount}>Increament</button>
                  <button onClick={decreamentCount}>decreament</button>
                  <button onClick={resetCount}>Reset</button>
              </div>
          </div> 
        </div> 
    </div>
  )
}
