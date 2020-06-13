import React from 'react'

const superheroes = [
  'Spider-Man',
  'Thor',
  'Iron Man',
  'Hulk',
  'Captain America',
]

function SuperheroList(props) {
  return (
    <div>
      <h1>Superhero List</h1>
      <ul>
        {props.superheroes.map((hero, index) => {
          return <li key={index}>{hero}</li>
        })}
      </ul>
    </div>
  )
}

export default function App() {
  return <SuperheroList superheroes={superheroes} />
}

// const superheroes = [
//   { id: 1, name: 'Spider-Man' },
//   { id: 2, name: 'Thor' },
//   { id: 3, name: 'Iron Man' },
//   { id: 4, name: 'Hulk' },
//   { id: 5, name: 'Captain America' },
// ]

// function SuperheroList(props) {
//   return (
//     <div>
//       <h1>Superhero List</h1>
//       <ul>
//         {props.superheroes.map((hero) => {
//           return <li key={hero.id}>{hero.name}</li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default function App() {
//   return <SuperheroList superheroes={superheroes} />
// }
