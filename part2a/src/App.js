import React from 'react';
import Note from './components/Note'

const App = ({notes}) => {

  /*
   Using map high order function in JS, we return <li> content </li>
   for each value in the notes list
   notes.map(note => <li> {note.content} </li>)
   We have to add key since we use the map function, which must have an unique value for attribute key
   Map ALWAYS create a new array, which new value will be pushed into.
   We MUST NOT use index as the key because array values can change. Hence,
   using index will cause wrong data if we add/remove values from the array.
   Key is the only way REACT can understand DOM element.
   Since we decouple the component of notes into its own component,
   the key is still assigned but to the Note COMPONENT itself.
  */
  const rows = () => notes.map(
    note => <Note key = {note.id} note = {note} />
  )

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {rows()}
      </ul>
    </div>
  )
}

export default App;
