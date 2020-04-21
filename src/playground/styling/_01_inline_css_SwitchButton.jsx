import React, { useState } from 'react'

function useToggle(initialIsOn = false) {
  const [isOn, setIsOn] = useState(initialIsOn);

  function handleClick() {
    setIsOn(!isOn)
  }

  return {
    isOn,
    onClick: handleClick
  }
}

function SwitchButton() {
  const { isOn, onClick } = useToggle();

  return (
    <div>
      <button style={{
        backgroundColor: isOn ? "red" : "green",
        color: "white",
        fontWeight: "bold",
        borderRadius: "30px",
        padding: "10px"
      }}
        onClick={onClick}>TURN {isOn ? 'OFF' : 'ON'}</button>
    </div>
  )
}

export default SwitchButton
