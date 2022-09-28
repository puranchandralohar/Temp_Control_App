import React, { useState } from 'react'
import './style.css'

export function TempApp(props) {
  const [temp, setTemp] = useState(10)


  return (
    <div className="app_container">
      <div className="temp_container">
        <div className="temp_display">{temp}°C</div>
        <div className="button_container">
          <button onClick={()=>setTemp(temp+1)}>+</button>
          <button onClick={()=>setTemp(temp-1)}>-</button>
        </div>
        <div className="app_title">{props.title}</div>
        
      </div>
    </div>
  )
}
