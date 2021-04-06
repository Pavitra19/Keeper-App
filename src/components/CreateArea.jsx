import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setText((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(text);
    setText({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={text.title}
        />
        <textarea
          name="content"
          placeholder="Take a Note..."
          onChange={handleChange}
          value={text.content}
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
