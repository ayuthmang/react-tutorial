import React, { useState } from 'react'
import styles from './_03_css_module_SwitchButton.module.css'

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
      <button className=
        {`${styles['btn__toggle']} 
        ${isOn ? styles['btn__toggle--on'] : styles['btn__toggle--off']}`}
        onClick={onClick}>TURN {isOn ? 'OFF' : 'ON'}</button>
    </div>
  )
}

export default SwitchButton
