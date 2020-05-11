import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/notes'

/*
  npm (node package manager): store/manage all the Javascript

*/

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  //The function body is executed and the component is rendered
  // for the first time. At this point render 0 notes is printed
  // -> data hasn't been fetched from the server.
  const hook = async () => {
    console.log('effect')
    // The function is executed immediately after rendering
    // The execution of the function results in effect
    // being printed to the console
    // -> The axios.get initiate the fetching from the server
    // and register response as the event handler
    // -> When data arrives, JS runtime calls the function
    // event handler -> re-render the components
    // axios.get('http://localhost:3001/notes').then(response => {
    //   console.log('promise fullfilled')
    //   setNotes(response.data)
    // })
      const request = axios.get(baseUrl)
      request.then(response => setNotes(response.data))
  }

  //Take 2 parameters, the hook, which is a function
  //The 2nd argument is how often the effect is run
  // -> Empty array == first render of the component
  useEffect(hook, [])
  console.log('render',notes.length, 'notes')
  return (<div> Hello </div>)
}


export default App;
