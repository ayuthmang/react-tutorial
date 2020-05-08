import React from 'react'

class SwitchButton extends React.Component {
  state = {
    isOn: this.props.isOn || false,
  }

  handleClick = () => {
    this.setState({
      isOn: !this.state.isOn,
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        TURN {this.state.isOn ? 'OFF' : 'ON'}
      </button>
    )
  }
}

export default SwitchButton
