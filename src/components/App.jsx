import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(text, setText) {
    setNotes((prevValue) => {
      return [...prevValue, text];
    });
    setText("");
    event.preventDefault();
  }

  return (
    <div>
      <Header />
      <CreateArea setNotes={setNotes} onAdd={addNote} />
      {notes.map((note) => (
        <Note title={note.title} content={note.content} />
      ))}
      {console.log("notes ", notes)}
      <Note key={1} title="Note title" content="Note Content" />
      <Footer />
    </div>
  );
}

export default App;
