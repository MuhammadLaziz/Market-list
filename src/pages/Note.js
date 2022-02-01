// import notes from "../assets/data";
import {ReactComponent as Arrow} from '../assets/arrow-left.svg'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'

function Note(props) {
  const [note, setNote] = useState(null)
  let noteID = props.match.params.id;
  // const currentNote = notes.find((el) => el.id == noteID)
  useEffect(() => {
    getNote()
  }, [noteID])

  const createNote = async() => {
    await fetch(`http://localhost:5000/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...note, updated: new Date() })
    })
  }

  const getNote = async() => {
    const response = await fetch(`http://localhost:5000/notes/${noteID}`)
    const data = await response.json()

    setNote(data)
  }

  const updateNote = async() => {
    await fetch(`http://localhost:5000/notes/${noteID}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...note, "updated": new Date() })
    })
  }

  const submit =  () => {
    if(noteID !== 'new' && !note.body) {
      deleteNote()
    } else if(noteID !== 'new') {
      updateNote()
    }else if (noteID === 'new' && note !== null) {
      createNote()
    }
    props.history.push("/")
  }

  const deleteNote = async() => {
    await fetch(`http://localhost:5000/notes/${noteID}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({note})
    })

    props.history.push("/")
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
        <Link to={"/"}>
          <Arrow onClick={submit} />
        </Link>
        </h3>
        {noteID !== 'new' ? (
          <button onClick={deleteNote}>Delet</button>
        ) : (
          <button onClick={submit}>Done</button>
        )}
      </div>

      <textarea onChange={e => {setNote({...note, "body": e.target.value})}} value={note?.body}></textarea>
    </div>
  );
}
export default Note;

