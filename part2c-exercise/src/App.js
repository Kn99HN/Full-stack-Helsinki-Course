import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Filter = (props) => {
  const searchVal = props.keyword
  const persons = props.persons
  const filtered = persons.filter(function(person) {
    return person.name.includes(searchVal)
  })
  return filtered.map(person => <li key = {person.name}> {person.name + ' ' + person.number} </li>)
}

const Form = (props) => {
  const personHandler = props.personHandler
  const nameChange = props.handleNameChange
  const numberChange = props.handleNumberChange
  return (
    <form onSubmit = {personHandler}>
      <div>
        name: <input onChange = {nameChange}/>
      </div>
      <div> number: <input onChange = {numberChange}/></div>
      <div>
        <button type="submit" >add</button>
      </div>
    </form>
  )
}

const App = () => {

  //set state for the persons
  const [persons, setPersons] = useState([])

  //define a function to fetch the data
  const hook = () => {
    // The function is executed immediately after rendering
    // The execution of the function results in effect
    // being printed to the console
    // -> The axios.get initiate the fetching from the server
    // and register response as the event handler
    // -> When data arrives, JS runtime calls the function
    // event handler -> re-render the components
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fullfilled')
      setPersons(response.data) //set the person state with the data
    })
  }

  //using the effect
  useEffect(hook, [])
  const [ newName, setNewName ] = useState(
    'Input a name'
  )
  const [newNumber, setNewNumber] = useState(true)
  const [newSearch, setSearchValue] = useState('')


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handlePerson = (event) => {
    event.preventDefault()
    console.log(persons.indexOf(newName))
    if(persons.indexOf(newName) > -1) {
      alert(`${newName} already exists`)
    } else {
      const Person = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(Person))
    }
    setNewName('')
  }

  // const rows = () => persons.map(
  //   person => <li key = {person.name}> {person.name + ' ' + person.number} </li>
  // )

  const handlerSearch = (event) => {
    setSearchValue(event.target.value)
  }
  //
  // const search = () => {
  //   const filtered = persons.filter(function(person) {
  //     return person.name.includes(newSearch)
  //   })
  //   return filtered.map(person => <li key = {person.name}> {person.name} </li>)
  // }

  return (
    <div>
      <h2>Phonebook</h2>
      <div> Input Search Value: <input onChange = {handlerSearch}/> </div>
      <h2> Adding New Person </h2>
      <Form personHandler = {handlePerson}
            handleNameChange = {handleNameChange}
            handleNumberChange = {handleNumberChange}
      />
      <h2>Numbers</h2>
      <Filter keyword = {newSearch} persons = {persons} />
    </div>
  )
}


export default App
