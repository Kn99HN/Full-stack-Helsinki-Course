import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const handleGoodClick = () => {
  //   setGood(good + 1)
  // }
  //
  // const handleNeutralClick = () => {
  //   setNeutral(neutral + 1)
  // }
  //
  // const handleBadClick = () => {
  //   setBad(bad + 1)
  // }

  return (
    <div>
      <h2> Give Feedback </h2>
      <Button handleClick = {() => setGood(good + 1)} text = "good" />
      <Button handleClick = {() => setNeutral(neutral + 1)} text = "neutral" />
      <Button handleClick = {() => setBad(bad + 1)} text = "bad" />
      <h2> Statistic </h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

const Button = (props) => {
  return(
      <button onClick = {props.handleClick}>
      {props.text}
      </button>
  )
}

const Statistics = (props) => {
  if(props.good === 0) {
    return (
      <div> No feedback given </div>
    )
  }
  let total = props.good + props.neutral + props.bad
  let average = total / 3
  let postive = props.good / total * 100

  return(
    <div>
      <table>
      <Statistic text = "good" value = {props.good} decVal = {0}/>
      <Statistic text = "neutral" value = {props.neutral} decVal = {0}/>
      <Statistic text = "bad" value = {props.bad} decVal = {0}/>
      <Statistic text = "total" value = {total} decVal = {0} />
      <Statistic text = "average" value = {average} decVal = {1}/>
      <Statistic text = "postive" value = {postive} decVal = {1} sign = "%"/>
      </table>
    </div>
  )
}

const Statistic = (props) => {
  return(
      <tr>
        <td> {props.text} </td>
        <td> {props.value.toFixed(props.decVal)} {props.sign}</td>
      </tr>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
