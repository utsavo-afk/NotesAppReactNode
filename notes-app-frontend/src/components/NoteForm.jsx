import React from "react";
import { createNote } from "../services/notes";

const NoteForm = (props) => {
  const { newNote, setNewNote } = props;
  const { notes, setNotes } = props;
  const { setErrorMessage } = props;

  const addNoteHandler = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      important: false,
      date: new Date().toISOString(),
    };
    if (noteObject.content === "") {
      // return console.log('note cannot be blank!')
      setErrorMessage("Note cannot be blank");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return;
    }
    createNote(noteObject)
      .then((returnedNote) => setNotes(notes.concat(returnedNote)))
      .then(() => setNewNote(""))
      .catch(() => {
        console.log("something went wrong couldn't add note");
        setErrorMessage("note cannot be added");
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      });
  };
  return (
    <div>
      <form onSubmit={addNoteHandler}>
        <div>
          <input
            type="text"
            id="new_note"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button type="submit">add note</button>
        </div>
      </form>
    </div>
  );
};
export default NoteForm;
