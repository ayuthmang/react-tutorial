import React, { useState } from 'react'
import styled from 'styled-components'

const StyledSwitchButton = styled.button`
  background-color: ${(props) => (props.isOn ? 'red' : 'green')};
  color: white;
  font-weight: bold;
  border-radius: 30px;
  padding: 10px;
`

function SwitchButton({ isOn: initialIsOn = false }) {
  const [isOn, setIsOn] = useState(initialIsOn)

  function onClick() {
    setIsOn(!isOn)
  }

  return (
    <div>
      <StyledSwitchButton isOn={isOn} onClick={onClick}>
        TURN {isOn ? 'OFF' : 'ON'}
      </StyledSwitchButton>
    </div>
  )
}

export default SwitchButton
