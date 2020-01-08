import React from 'react';
import ReactDOM from 'react-dom';

/*
The arguments passed in are called props.
We often pass this in by assinging a key=value pair
to the argument in the call, the caller then retrieve this value
by using the key.
*/
const Hello = (props) => {
  return(
    <>
      <p>Hello {props.name}</p>
    </>
  )
}

/*
Component in React is a function that takes an input
and produce an output. It is then assigned to a
constant called App. Component in React must be
capitalized, otherwise the code won't work. If we
don't contain one root element such as div, the code
will fail to compile.
=> We can wrap the code with <> (aka empty element)
*/
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log("Hello from Component")
  return(
    /*
    This is neither HTML nor String. It's JSX, an extension of React Library.
    It is then compiled into JavaScript
    */
    ////JSX at work by calling consant with component. This can be done multiple times
    <div>
      <h1> Greetings</h1>
      <Hello name = "George"/>
    </div>)
}

/*
This line renders its contents into the div-element,
defined in public/index.html, having the id = 'root'
*/
ReactDOM.render(<App />, document.getElementById('root'));
