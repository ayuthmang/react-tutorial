import React from 'react'

// condition ? exprIfTrue : exprIfFalse

let isSuperhero = true
const greeting = isSuperhero ? 'Greeting, my hero 🥰!' : 'Hi there, muggle.'
console.log(greeting) // Greeting, my hero 🥰

let isSuperhero = false
const greeting = isSuperhero ? 'Greeting, my hero 🥰!' : 'Hi there, muggle.'
console.log(greeting) // Hi there, muggle.

function SuperHeroGreeting(props) {
  return <h1>Greeting, my hero 🥰!</h1>
}
function NormalPeopleGreeting(props) {
  return <h1>Hi there, muggle.</h1>
}

function Greeting(props) {
  return props.isSuperhero ? <SuperHeroGreeting /> : <NormalPeopleGreeting />
}

export default function App() {
  return <Greeting isSuperhero={true} />
}

// return (
//   <div>
//     {condition1 ? (
//       <Component1 />
//     ) : condition2 ? (
//       <Component2 />
//     ) : condition3 ? (
//       <Component3 />
//     ) : (
//       <Component4 />
//     )}
//   </div>
// )
