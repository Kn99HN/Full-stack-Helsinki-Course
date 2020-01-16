import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/*
We destructure at the parameter
*/
const Hello = ({name, age}) => {
  // const name = props.name. A way to destructure component
  // const age = props.age
  /*
  Finding the birth year by defining a function within the function.
  This logic is separated when the component is rendered
  */
  const bornYear = () => new Date().getFullYear() - age //compact syntax with one command

  return(
    <div>
      <p>
        Hello {name}, you are {age} years old;
      </p>
      <p> So you were propbably born in {bornYear()} </p>
    </div>
  )
}

const App = (props) => {
  const {counter} = props
  const name = "Peter"
  const age = 10
  const [count, setCount] = useState(0)

  /*
  Stateful Development. setTimeout RE-RENDER the body of the function.
  The function body is re-rendered. The useState will now return the NEW
  incremented value. setTimeout is called, the STATE of count == 2. BUT
  the screen will render 1 first.
  */
  // setTimeout(
  //   () => {setCount(count + 1)}, 1000
  // )

  // const handleClick = () => {
  //   console.log('clicked')
  // }

  //Note: -> Normal way to implement button
  // <button onClick = {handleClick}>
  // plus
  // </button>

  //Note: -> A more direct way to implement this.
  //We let the function handler to be inside th JSX. Each time clicked, the function
  // body is re-rendered
  // <button onClick = {() => setCount(count + 1)} >
  // plus
  // </button>


  /*
  <button onClick = {setValue(count + 1)} >
  -> This will cause a problem because it is a function call, but
  not a reference to the function itself
  -> So we will fix by letting the function return a function.
  */
  const setValue = (value) => {
    return setCount(value)
  }

  //We split the event handlers into smaller components as the best
  // coding practice in React. 
  return (
    <div>
      <h1> Greetings </h1>
      <Hello name = "Maya" age = {26 + 10} />
      <Hello name = {name} age ={age} />
      <div> {counter} </div>
      <Display counter = {counter}/>
      <Button onClick = {() => setValue(count + 1)} text = 'plus'/>
      <Button onClick = {() => setValue(0)} text = 'zero'/>
    </div>
  )
}

//Using destructure style to pass in the parameter
const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick ={onClick} >
  {text}
  </button>
)

// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )


//let has block scope but it exist out here
let counter = 1

//wrap around a function to call
const refresh = () => ReactDOM.render(<App counter = {counter}/>, document.getElementById('root'));

/*
call refresh each time to re-render. Then counter will increase but this will
jump to the last value right away
*/
refresh()
counter += 1
refresh()
counter += 1
refresh()
counter += 1

/*
Stateless. using a function setInterval, we increase counter every second.
The function takes two parameter: a function and the amount of time.
Syntax-wise, we pass in a function with form () => {} in JS.
*/
// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)

/*
##### NOTE ######
We want to use stateful in React. We will do so by using React's state hook.
*/

// #### Class Example #####
// This is a class in React, extending React.component, subclass of Component
// class Examples extends React.Component {
//   constructor(proprs) {
//     super(props)
//     this.state = {
//       count: 0
//     };
//   }
//
//   render() => {}
// }

// ###### REACT introduce State hook #####
// const [count, setCount] = useState(0)
/* => useState is a function, with initial value passed in.
      It returns an array of two values. The first is the variable, which is
      assigned the initial state. The second is a FUNCTION that would change
      the state of the first variable
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
