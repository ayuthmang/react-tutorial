import React, { useState } from 'react'

function SwitchButton({ initialIsOn = false }) {
  const [isOn, setIsOn] = useState(initialIsOn)

  function handleClick() {
    setIsOn(!isOn)
  }

  return <button onClick={handleClick}>TURN {isOn ? 'OFF' : 'ON'}</button>
}

export default SwitchButton
