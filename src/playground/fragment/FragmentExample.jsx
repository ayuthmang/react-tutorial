import React from 'react'

const Hello = (props) => <h1>Hi, {props.name}</h1>

const App = () => (
  <>
    <Hello name={'John'} />
    <Hello name={'Jane'} />
    <Hello name={'Jim'} />
  </>
)

export default App
