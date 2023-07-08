import { useState } from 'react'

// Tilastojen lasku ja näyttäminen
const Statistics = ({ good, neutral, bad }) => {
    const sum = good + neutral + bad
    if (sum === 0){
      return <p>No feedback given</p>
    }

    return (
      <table>
        <tbody>
          <StatisticLine text='Good:' value={good} />
          <StatisticLine text='Neutral:' value={neutral} />
          <StatisticLine text='Bad:' value={bad} />
          <StatisticLine text='All:' value={sum} />
          <StatisticLine text='Average:' value={(good * 1 + neutral * 0 + bad * (-1))/sum} />
          <StatisticLine text='Positive:' value={`${parseFloat(good / sum) * 100 } %`}/>
        </tbody>
      </table>
    )
}

// Tilastorivin esitys
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>
)

// Painike ja sen määrittely
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick} style={{ marginRight: "5px" }}>{text}</button>
)

// Painikkeiden ja tilastojen renderöinti sekä tilojen hallinta
const App = () => {
  // Alkuarvot
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Kasvatetaan laskureita
  return (
    <div>
        <h1>Give feedback</h1> 
        <div>
          <Button handleClick={() => setGood(good + 1)} text='Good'/> 
          <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral'/>
          <Button handleClick={() => setBad(bad + 1)} text='Bad'/>
        </div>
        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
