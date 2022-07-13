import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";
import Header from "./components/header-component/Header";
import { useState } from "react";
import uuid from 'react-uuid'

function App() {

  const [notes, setNotes] = useState([]);

  const [activeNote, setActiveNote] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'New note',
      body: "",
      lastModified: Date.now()
    }

    setNotes([newNote, ...notes]);
  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete))
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }

  const onUpdateNote = (updatetNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatetNote;
      } 

      return note;
    })

    setNotes(updatedNotesArray);
  }


  return (
    <div className="app__wrapper">
      <Header setSearchTerm={setSearchTerm} />
      <div className="app">
        <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} searchTerm={searchTerm} />
        <Workspace activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      </div>
      
    </div>
  );
}

export default App;
