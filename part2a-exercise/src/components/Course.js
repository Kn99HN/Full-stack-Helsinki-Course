import React from 'react'

const Course = (props) => {

  const courseRows = () => props.course.map(function(course) {
      return (
        <div key = {course.id}>
          <h1> {course.name} </h1>
          {course.parts.map(function(part) {
            return <li key = {part.id}>
            {part.name + ' ' + part.exercises}
            </li>
          })}

          <li> Total Exercises: {course.parts.reduce(function(sum, part){
              return sum + part.exercises
            },0)}</li>
        </div>

      )
  })
  // const total = () => parts.reduce(function(sum, part) {
  //   console.log(sum, part)
  //   return sum + part.exercises
  // }, 0)

  return (
    <div>
      <ul> {courseRows()} </ul>
    </div>
  )
}

export default Course
