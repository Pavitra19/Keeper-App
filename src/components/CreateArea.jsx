import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: "",
  });

  const [showContent, setShowContent] = useState(false);

  function handleClick() {
    setShowContent(true);
  }

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
        {showContent && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={text.title}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a Note..."
          onChange={handleChange}
          onClick={handleClick}
          value={text.content}
          rows={showContent ? 3 : 1}
        />

        <Zoom in={showContent}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
