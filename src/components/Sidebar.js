

function Sidebar({notes, onAddNote, onDeleteNote, activeNote, setActiveNote, searchTerm}) {

    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified)


    return (
        <div className="sidebar__wrapper">
            <div className="sidebar__header">
                <h2 className="sidebar__header-title">Notes</h2>
                <button className="sidebar__button-add" onClick={onAddNote}>Add</button>
            </div>
            <div className="sidebar__notes">
                {sortedNotes.filter((val) => {
                    if(searchTerm === "") {
                        return val
                    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((note) => (
                    <div className={`sidebar__note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                        <div className="sidebar__note-title">
                            <p className="note-title-text">{note.title}</p>
                            <button className="sidebar__button-del" onClick={() => onDeleteNote(note.id)}>Delete</button>
                        </div>
                        <p className="sidebar__note-preview">{note.body && note.body.substr(0, 100) + '...'}</p>
                        <small className="note-meta">Last modified {new Date(note.lastModified).toLocaleDateString("en-US", {
                            hour: '2-digit', 
                            minute: '2-digit'
                        })}</small>
                    </div>
                ))}
                
            </div>
        </div>
    );
}

export default Sidebar;