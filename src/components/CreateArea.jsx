import React from "react";

function CreateArea() {
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a Note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
