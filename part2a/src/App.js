import React, {useState} from 'react';
import Note from './components/Note'

const App = (props) => {
  const [showAll, setShowAll] = useState(true)
  const [notes, setNotes] = useState(props.notes)

  //if showall is false, we filter the important one
  const notesToShow = showAll
                ? notes
                : notes.filter(note => note.important === true)
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
  const rows = () => notesToShow.map(
    note => <Note key = {note.id} note = {note} />
  )

  /*
    Controlled Component: A way to access users' input element.
  */
  const [newNote, setNewNote] = useState(
    'a new note...'
  )

  /*
    We define a handler. If there is no handler, the input value
    will be rendered through the DOM but by declaring handler,
    a mutable state is kept in the State PROPERTY of the components.
    By having a handler, we combine the two and have ONE source
    to update the state => making it a "controlled component"
  */
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault() // This will prevent the default case of nothing from being submitted
    const NoteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
    /*
    Set Note first by adding to the notes array by setting state
    Does NOT mutate the state but making a copy of the array with the new value
    NEVER mutate state DIRECTlY in REACT
    */
    setNotes(notes.concat(NoteObject))
    /*
      Reset the state of the newNote value to a new value
    */
    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick = {() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {rows()}
      </ul>
      <form onSubmit = {addNote}>
        <input value = {newNote} onChange = {handleNoteChange}/>
        <button type = "submit"> save </button>
      </form>
    </div>
  )
}

export default App;
