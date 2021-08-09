import React from "react";
import { deleteNote, updateNote } from "../services/notes";

const Note = (props) => {
  // const { note, content, id, important } = props;
  const {
    note: { content, id, important },
  } = props;
  const { notes, setNotes } = props;
  const { setErrorMessage } = props;

  // delete a note
  const deleteThisNote = (id) => {
    const note = notes.find((n) => n.id === id);
    if (note) {
      return deleteNote(id)
        .then(() => {
          setNotes(notes.filter((note) => (note.id !== id ? note : null)));
        })
        .catch(() => {
          console.log("error: cannot delete this note");
          setNotes(notes.filter((n) => n.id !== id));
          setErrorMessage("error deleting note!");
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
        });
    }
    setNotes(notes.filter((n) => n.id !== id));
    setErrorMessage("the note you are trying to delete is not on the server");
    setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
    return console.log("this note does not exist");
  };
  const toggleThisImportance = (id) => {
    const note = notes.find((n) => n.id === id);
    if (note) {
      const changedNote = { ...note, important: !note.important };
      return updateNote(id, changedNote)
        .then((updatedNote) => {
          console.log(updatedNote);
          setNotes(notes.map((n) => (n.id !== id ? n : updatedNote)));
        })
        .catch(() => {
          console.log("fail");
          setNotes(notes.filter((n) => n.id !== id));
          setErrorMessage("notes importance could not be updated at this time");
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
        });
    }
    console.log("note does not exist");
    setErrorMessage("this note does not exist");
    setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
    return setNotes(notes.filter((n) => n.id !== id));
  };
  const label = important ? " mark not important" : "important";
  return (
    <p noteid={id} className="note">
      {content}
      <span>
        <button onClick={(_) => toggleThisImportance(id)}>{label}</button>
        <button onClick={(_) => deleteThisNote(id)}>delete</button>
      </span>
    </p>
  );
};
export default Note;
