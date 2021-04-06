import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setText((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
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
        <button
          onClick={() => {
            props.onAdd(text, setText);
            setText({});
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
