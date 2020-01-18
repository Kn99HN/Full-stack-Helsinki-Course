import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/*
Conditional rendering. Render different React-elements depending
on the state of the application
*/
const History = (props) => {
  if(props.allClicks.length === 0) {
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return(
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick = {onClick}>
  {text}
  </button>
)

const App = (props) => {
  //##### NOTE ##### - separate state for each state hook
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  /*
    Every click is stored into a separate piece of state
    called allClicks that is initialized as an EMPTY array
  */
  const [allClicks, setAll] = useState([])
  /*
    Combine them into one and handle each one individually.
    The componenet has a SINGLE state. The handlers will handle
    changing the state of each one. It is FORBIDDEN in React
    to mutate state directly since it can RESULT in unexpected side
    effects
  */
  // const[clicks, setClicks] = useState({
  //   left: 0, right: 0
  // })
  //
  // const handleLeftClick = () => {
  //   const newClicks = {
  //     left: clicks.left + 1,
  //     right: clicks.right
  //   }
  //   setClicks(newClicks)
  // }
  //
  // const handleRightClick = () => {
  //   const newClicks = {
  //     left: clicks.left,
  //     right: clicks.right + 1
  //   }
  //   setClicks(newClicks)
  // }

  /*
    Each call to left click will concat a value to the array.
    We can seprate the process by pushing the value L to the array
    and set the state afterwards. BUT this is NOT recommended in REACT
    as it is not safe to modify the state directly
  */
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  //Event handler is not a function BUT a variable assignment.
  // If we define () => {} syntax, we are REFERENCING a function call and not the call to function itself
  return(
    <div>
      <div>
        {left}
        <Button onClick = {handleLeftClick} text = 'left' />
        <Button onClick = {handleRightClick} text = 'right' />
        {right}
        <History allClicks = {allClicks} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
