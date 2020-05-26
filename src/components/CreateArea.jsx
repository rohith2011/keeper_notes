import React, { useState } from "react";

function CreateArea(props) {
  var [title, chantitle] = useState("");
  var [content, chancontent] = useState("");

  function changetitle(event) {
    chantitle(event.target.value);
  }
  function changecontent(event) {
    chancontent(event.target.value);
  }

  function form_func(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={form_func}>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={changetitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onChange={changecontent}
        />
        <button
          onClick={() => {
            props.onAdd(title, content);
            chantitle("");
            chancontent("");
          }}
        >
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
