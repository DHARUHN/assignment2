import React from 'react'
import {useReducer} from 'react'
import './Reducer.css'
const counterReducer=(state,action)=>
{
    switch(action.type){
        case "INCREAMENT":
            return {count:state.count+1};
        case "DECREAMENT":
            return {count:state.count-1};
        default:
            return state;
    }
}
export default function Reducer() {
    const [state,dispatch]=useReducer(counterReducer,{count:0});
  return (
    <div className="reducer">
        <p>Count:{state.count}</p>
        <button onClick={()=>dispatch({type:'INCREAMENT'})}>ADD</button>
        <button onClick={()=>dispatch({type:'DECREAMENT'})}>SUB</button>
    </div>
  )
}
