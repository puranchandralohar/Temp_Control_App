import React from 'react'
import './style.css'

export function TempApp() {
  return (
    <div className="app_container">
      <div className="temp_container">
        <div className="temp_display">10°C</div>
        <div className="button_container">
          <button>+</button>
          <button>-</button>
        </div>
        
      </div>
    </div>
  )
}
