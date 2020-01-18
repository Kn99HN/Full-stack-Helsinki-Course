import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const[points, setPoint] = useState(new Array(6).fill(0))
  const rand = Math.floor(Math.random() * 6);

  const handleScore = (idx) => {
    const copy = [...points]
    copy[idx] += 1
    setPoint(copy)
  }

  const index = points.indexOf(Math.max(...points));

  return (
    <div>
      <h2> Anecdote of the day </h2>
      {props.anecdotes[selected]}
      <div> had {points[selected]} votes </div>
      <Button handleClick = {() => setSelected(rand)} text = "Next anecdotes"/>
      <Button handleClick = {() => handleScore(selected)} text = "vote" />
      <h2> Anecdote with most votes </h2>
      <div> {props.anecdotes[index]}</div>
      <div> with {points[index]} votes </div>
    </div>
  )
}

const Button = (props) => {
  return(
    <div>
      <button onClick = {props.handleClick} > {props.text} </button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
