import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";
import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import { getAllNotes } from "./services/notes";
import { setToken } from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [newNote, setNewNote] = useState("add a note..");
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loginVisible, setLoginVisible] = useState(false);

  useEffect(() => {
    return getAllNotes()
      .then((fetchedData) => setNotes(fetchedData))
      .catch(() => {
        console.log("Could not fetch data");
      });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      setToken(user.token);
    }
  }, []);

  return (
    <>
      <h1>Notes App</h1>

      <Notification message={errorMessage} />

      {user === null && (
        <LoginForm
          setErrorMessage={setErrorMessage}
          setUsername={setUsername}
          setPassword={setPassword}
          username={username}
          password={password}
          setUser={setUser}
          loginVisible={loginVisible}
          setLoginVisible={setLoginVisible}
        />
      )}

      <div>
        <button onClick={(_) => setShowAll(!showAll)}>
          {showAll ? "show important" : "show all"}
        </button>
      </div>
      <div>
        {notes.length ? (
          (showAll
            ? notes
            : notes.filter((note) => note.important === true)
          ).map((note) => (
            <Note
              key={note.id}
              note={note}
              notes={notes}
              setNotes={setNotes}
              setErrorMessage={setErrorMessage}
            />
          ))
        ) : (
          <p>Fetching your notes...</p>
        )}
      </div>
      {user !== null && (
        <div>
          <p>{user.name} logged-in</p>
          <NoteForm
            notes={notes}
            setNotes={setNotes}
            newNote={newNote}
            setNewNote={setNewNote}
            setErrorMessage={setErrorMessage}
          />
        </div>
      )}
      <Footer />
    </>
  );
};

export default App;
