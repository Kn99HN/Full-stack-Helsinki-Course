import React from 'react';
import ReactDOM from 'react-dom';

//Execise

const Header = (course) => {
  return(
    <div>
      <h1> {course.name} </h1>
    </div>
  )
}

const Part = (content) => {
  return(
    <>
      <p> {content.name} {content.exercise} </p>
    </>
  )
}

//Content component calling Part component
const Content = (content) => {
  const contents = content.parts
  const course1 = contents[0]
  const course2 = contents[1]
  const course3 = contents[2]
  return(
    <div>
      {/*Separting each exercise into separate components*/}
      <Part name = {course1.name} exercise = {course1.exercise}/>
      <Part name = {course2.name} exercise = {course2.exercise}/>
      <Part name = {course3.name} exercise = {course3.exercise}/>
    </div>
  )
}

const Total = (content) => {
  const contents = content.parts
  const course1 = contents[0]
  const course2 = contents[1]
  const course3 = contents[2]
  return(
    <div>
      <p>Number of exercises {course1.exercise + course2.exercise + course3.exercise} </p>
    </div>
  )
}

const App = () => {
  /*
    Constant definition. These constants will never be changed.
    Variables in JS can be assigned different type.
    Use const and let to define Variables instead of var.
    Var's scope goes outside of the block.
    Let and Const has block scope. Hence, safer
  */
  const course ={
    name:  "Half Stack application development",
    parts: [
      {
        name: 'fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }

    ]
  }

  return(
    <div>
      <Header name = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts} />
    </div>
  )
}

/*
This line renders its contents into the div-element,
defined in public/index.html, having the id = 'root'
*/
ReactDOM.render(<App />, document.getElementById('root'));


//JavaScript Practice

/*
##### Array #####
t points to an array object, the element can be changed
but t pointer to array cannot
*/
const t = [1,2,3]
t.push(4)
//Calling forEach function passing in value element
t.forEach(value => {
  console.log(value)
})

/*
In React, it's best to use functional programming paradigm
by using immutable data structures. Concat > push because
concat will create a new array and add the values to
the new array. The old array remains unchanged
*/
const t1 = [1,-1,3]
const t2 = t1.concat(5)
console.log(t1)
console.log(t2)

/*
Function map creates a new array, using
values from the old arrays to make a new one
*/
const m1 = t1.map(value => value * 2)
console.log(m1) //[2,4,6] is printed

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2) // ['<li>1</li>', ...]

/*
Destructuring assignment. Syntax in JavaScript
to unpack values from arrays or properties from objects
into distinct variables
*/

const a1 = [1,2,3,4,5]
const [a, b, ...rest] = a1 //retrieve the first 2 values into distinct objects
console.log(a, b) //1,2 is printed
console.log(rest) //3,4,5 are printed

/*
Objects. Quite similar to Struct in C. You can wrap
it with arrays, integers, string, more structs etc
*/

const object1 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  age : 35,
  education : 'PhD',
  grades: [2,3,5,3],
}
console.log(object1.name)
const fieldName = 'age'
console.log(object1[fieldName])

/*
Function definition. If only one param,
the parenthesis can be ignored.
There are different way to define a function
*/
const sum = (p1,p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}
const result = sum(1,5)
console.log(result)

function product(a,b) {
  return a * b
}

const res = product(2,5)
console.log(res)

/*
####################### NOTES ####################
*/

/*
JavaScript move the code to the top of the code/function.
Instead of walking through the code, the intepreter will
automatically move the variables up top.
So this can be unsafe for many operation call.
*/


/*
The arguments passed in are called props.
We often pass this in by assinging a key=value pair
to the argument in the call, the caller then retrieve this value
by using the key.
*/
// const Hello = (props) => {
//   return(
//     <>
//       <p>Hello {props.name}</p>
//     </>
//   )
// }
//
// /*
// Component in React is a function that takes an input
// and produce an output. It is then assigned to a
// constant called App. Component in React must be
// capitalized, otherwise the code won't work. If we
// don't contain one root element such as div, the code
// will fail to compile.
// => We can wrap the code with <> (aka empty element)
// */
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log("Hello from Component")
//   return(
//     /*
//     This is neither HTML nor String. It's JSX, an extension of React Library.
//     It is then compiled into JavaScript
//     */
//     ////JSX at work by calling consant with component. This can be done multiple times
//     <div>
//       <h1> Greetings</h1>
//       <Hello name = "George"/>
//     </div>)
// }
