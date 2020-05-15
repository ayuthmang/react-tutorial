import React, { useState } from 'react'

function SwitchButton({ isOn: initialIsOn = false }) {
  const [isOn, setIsOn] = useState(initialIsOn)

  function onClick() {
    setIsOn(!isOn)
  }

  return (
    <button
      style={{
        backgroundColor: isOn ? 'red' : 'green',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '30px',
        padding: '10px',
      }}
      onClick={onClick}
    >
      TURN {isOn ? 'OFF' : 'ON'}
    </button>
  )
}

export default SwitchButton
