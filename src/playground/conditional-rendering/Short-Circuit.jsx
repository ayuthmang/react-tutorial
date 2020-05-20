import React from 'react'

// true && true // true
// false && true // false

// true && 'Hello' // 'Hello'
// false && 'Hello' // false

// true && <SuperheroGreeting /> // <SuperheroGreeting />
// false && <SuperheroGreeting /> // false

export default function Superheroes() {
  const heroes = ['Spider-Man', 'Thor', 'Iron Man', 'Hulk', 'Captain America']

  return (
    <div>
      <h1>Marvel Superheroes List</h1>
      <ul>{heroes.length > 0 && heroes.map((hero) => <li>{hero}</li>)}</ul>
    </div>
  )
}
