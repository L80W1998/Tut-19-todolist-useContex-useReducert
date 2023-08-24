import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Note from "./Note";
import CreateNote from "./CreateNote";
import "../css/App.css";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const deleteHandler = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    console.log("data", data);
    if (data.length > 0) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    console.log(notes);
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            text={note.text}
            id={note.id}
            deleteHandler={deleteHandler}
          />
        );
      })}
      <CreateNote
        inputText={inputText}
        textHandler={textHandler}
        saveHandler={saveHandler}
      />
    </div>
  );
}

export default Notes;
