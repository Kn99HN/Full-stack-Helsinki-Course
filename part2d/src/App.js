import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import noteService from './services/note'
const baseUrl = 'http://localhost:3001/api/notes'

//toggling the importance of a note
const Note = ({note, toggleImportance}) => {
  const label = note.important ? 'make not important' : 'make important'
  return(
    <li>
      {note.content}
      <button onClick = {toggleImportance}>
        {label}
      </button>
    </li>
  )
}



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
    const url =  `http://localhost:3000/notes/${id}`
    const note = notes.find(n => n.id === id)
    /**
     * ... is a spread operator. It enforces 
     * immutability. We are making a copy of the 
     * object, when we add a key-value pair
     * inside the { ..., }, we are changing 
     * the field of the object
     */
    const changedNote = {...note, important: !note.important}

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
  }

  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      import: Math.random() > 0.5
    }
    
    noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
  }
  //effect hooks take 2 params, one is a function and second 
  // is the way to store the values
  useEffect(() => {
    console.log('effect')
    noteService
    .getAll()
    .then(initalNotes => {
      console.log('promise fulfilled')
      setNotes(initalNotes)
    })
  }, [])

  return(
    <div>
      <button type = "submit" onClick = {addNote}>
        Add Note
      </button>
    </div>
  )
}


export default App;
