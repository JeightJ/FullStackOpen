// Komponentti osan renderöintiin
const Part = ({ name, exercises }) => {
  return (
    <p> {name} {exercises} </p>    // Nimi ja harjoitusten määrä
  )
}

// Komponentti nimen renderöintiin
const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1> // Kurssin nimi
  )
}

// Komponentti sisällön renderöintiin
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.name} {...part} />)} 
    </div> // Käydään läpi kaikki osat (part) ja renderöidään ne
  )
}

// Komponentti harjoitusten määrään
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  
  return (
    <p>Number of exercises {total}</p> // Harjoitusten kokonaismäärä
  )
}

// App
const App = () => {
  // Tietojen määrittely
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  // Renderöidään sovellus
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
