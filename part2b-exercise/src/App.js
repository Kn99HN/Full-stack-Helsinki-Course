import React, { useState } from 'react'

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
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

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
