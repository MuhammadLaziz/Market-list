// import notes from "../assets/data";
import Listitem from "../components/ListItem";
import {useState, useEffect} from 'react'
import CreateItem from "../components/CreateItem";

function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  const getNotes = async () => {
    const response = await fetch("http://localhost:5000/notes")
    const data = await response.json()
    setNotes(data)
  }

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Ro'yhati</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((el) => (
          <Listitem note={el} key={el.id} />
        ))}
      </div>
      <CreateItem />
    </div>
  );
}

export default Notes;
