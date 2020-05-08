import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    })

    /**
     * We called setState 4 times, why it's incremented only 1?
     * ANS: BATCH UPDATE!, don't rely on this.state, this.props
     **/
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    })
  }

  reset() {
    this.setState({
      count: 0,
    })
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}

export default Counter
