import React, { useState } from 'react'
import './_02_external_css_SwitchButton.css'

function SwitchButton({ isOn: initialIsOn = false }) {
  const [isOn, setIsOn] = useState(initialIsOn)

  function onClick() {
    setIsOn(!isOn)
  }

  return (
    <div>
      <button
        className={`btn__toggle
                    btn__toggle--${isOn ? 'off' : 'on'}`}
        onClick={onClick}
      >
        TURN {isOn ? 'OFF' : 'ON'}
      </button>
    </div>
  )
}

export default SwitchButton
