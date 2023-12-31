import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)

  // Taulukko äänille
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleVoteClick = () => {
    const newVotes = [...votes]
    // Äänen lisäys
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const handleNextClick = () => {
    // Satunnainen anekdootti
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  // Indeksi isoimmalle äänimäärälle
  const highestVoted = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={handleVoteClick}>vote</button> {/* Äänestyspainike */}
      <button onClick={handleNextClick}>next anecdote</button> {/* Seuraava -painike */}

      {/*Näytetään eniten ääniä saanut lausahdus*/}
      <h1>Anecdote with the highest number of votes is:</h1>
      <div>{anecdotes[highestVoted]}</div>
      <div>and it has {votes[highestVoted]} votes</div>
    </div>
  )
}

export default App
