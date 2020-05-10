import React from 'react'

export function Hello(props) {
  return <h1>Hi, {props.name}</h1>
}

export default function App() {
  return (
    <>
      <Hello name={'John'} />
      <Hello name={'Jane'} />
      <Hello name={'Jim'} />
    </>
  )
}
