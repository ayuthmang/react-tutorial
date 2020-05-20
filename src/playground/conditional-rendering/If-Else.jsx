import React from 'react'

function SuperheroGreeting(props) {
  return <h1>Greeting, my hero 🥰!</h1>
}
function NormalPeopleGreeting(props) {
  return <h1>Hi there, muggle.</h1>
}

function Greeting(props) {
  const isSuperhero = props.isSuperhero
  if (isSuperhero) {
    return <SuperheroGreeting />
  }
  return <NormalPeopleGreeting />
}

export default function App() {
  return <Greeting isSuperhero={true} />
}
