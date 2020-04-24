import React, { useState } from "react";
import styled from "styled-components";

const StyledSwitchButton = styled.button`
  background-color: ${(props) => (props.isOn ? "red" : "green")};
  color: white;
  font-weight: bold;
  border-radius: 30px;
  padding: 10px;
`;

function useToggle(initialIsOn = false) {
  const [isOn, setIsOn] = useState(initialIsOn);

  function handleClick() {
    setIsOn(!isOn);
  }

  return {
    isOn,
    onClick: handleClick,
  };
}

function SwitchButton() {
  const { isOn, onClick } = useToggle();

  return (
    <div>
      <StyledSwitchButton isOn={isOn} onClick={onClick}>
        TURN {isOn ? "OFF" : "ON"}
      </StyledSwitchButton>
    </div>
  );
}

export default SwitchButton;
