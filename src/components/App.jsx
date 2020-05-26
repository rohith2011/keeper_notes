import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list, upadte_list] = useState([]);

  function add(title, content) {
    upadte_list([
      ...list,
      {
        title1: title,
        content1: content
      }
    ]);

    console.log(list);
  }

  function delete1(title_del) {
    upadte_list(prevNotes => {
      return prevNotes.filter(hi => {
        return hi.title1 !== title_del;
      });
    });

    // upadte_list(prevNotes => {
    //   return console.log(prevNotes);
    // });

    // list.filter(notee => {
    //   return notee.title !== title_del;
    // });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={add} />
      {list.map(obj => {
        return (
          <Note
            key={list.title}
            title={obj.title1}
            content={obj.content1}
            onDel={delete1}
          />
        );
      })}

      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}
// console.log(list);
export default App;
