import React from 'react';

// Komponentti osan renderöintiin
const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p> // Osan nimi ja harjoitusten määrä
  )
}

// Komponentti nimen renderöintiin
const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2> // Kurssin nimi
  )
}

// Komponentti sisällön renderöintiin
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} {...part} />)} 
    </div>
  )
}

// Komponentti harjoitusten määrään
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  
  return (
    <b>Total number of exercises: {total}</b> // Harjoitusten kokonaismäärä
  )
}

// Course komponentti, joka sisältää kurssin
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course;
