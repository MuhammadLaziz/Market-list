import { Link } from "react-router-dom";

const getContent = (note) => {
  let title = getTitle(note)
  let content = note.body.replaceAll("\n", "")
  content = content.replaceAll(title, "")

  if(content.length > 40) {
    return content.slice(0, 45) + "..."
  }else {
    return content
  }
}

const getTitle = (note) => {
  const title = note.body.split("\n")[0]
  if(title.length > 40) {
    return title.slice(0, 40)
  }
  return title;
}

const getData = (data) => {
  return new Date(data.updated).toLocaleDateString()
}

export default function Listitem(props) {
  return (
    <Link to={`/note/${props.note.id}`}>
      <div className="notes-list-item">
        <h2>{getTitle(props.note)}</h2>
        <p>{getData(props.note)} | {getContent(props.note)}</p>
      </div>
    </Link>
  );
}
