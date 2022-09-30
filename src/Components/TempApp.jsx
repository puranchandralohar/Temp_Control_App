import React, { useState } from 'react'
import './style.css'

export function TempApp(props) {
  const [temp, setTemp] = useState(10)
  const [color,setColor] = useState('cold')

  const increment = ()=>{
    setTemp(temp+1);
    if(temp>=15){
      setColor('hot')
    }
  }

  const decrement = ()=>{
    setTemp(temp-1);
    if(temp<15){
      setColor('cold')
    }
  }


  return (
    <div className="app_container">
      <div className="temp_container">
        <div className={`temp_display ${color}`}>{temp}°C</div>
        <div className="button_container">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
        <div className="app_title">{props.title}</div>
        
      </div>
    </div>
  )
}
