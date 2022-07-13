import React from "react"
import ReactMarldown from 'react-markdown'

function Workspace({activeNote, onUpdateNote}) {

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        })
    }

    if(!activeNote) return <div className="no-active-note">
        <p className="no-active-note-text">No note selected.</p>
        </div>

    const today = Date.now();

    const currentDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric', 
        month: 'long', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit'
    }).format(today);

    return (
        <div className="workspace__wrapper">
            <div className="workspace__header">
                <p className="workspace__header-date">{currentDate}</p>
            </div>
            <div className="workspace__note-edit">
                <input onChange={(e) => onEditField("title", e.target.value)} value={activeNote.title} type='text' className="workspace__note-input"></input>
                <textarea className="workspace__note-area"placeholder="Write your note here..." value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)}></textarea>
            </div>
            <div className="workspace__note-preview">
                <h2 className="note-preview-title">{activeNote.title}</h2>
                <ReactMarldown className="note-preview-text">{activeNote.body}</ReactMarldown>
            </div>
        </div>
    );
}

export default Workspace;