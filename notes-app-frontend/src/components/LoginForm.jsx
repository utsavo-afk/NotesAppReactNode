import React from "react";
import { login } from "../services/logins";
import { setToken } from "../services/notes";
import "./LoginForm.component.css";

const LoginForm = (props) => {
  const { username, setUsername } = props;
  const { password, setPassword } = props;
  const { setUser } = props;
  const { setErrorMessage } = props;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login({ username, password });

      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));

      setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  return (
    <div>
      <form className="loginForm" onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button className="login-btn" type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
