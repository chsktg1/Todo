import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const checkLogin = async () => {
    const body = { name, username, password };
    const options = {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const res = await fetch("http://localhost:3001/signup", options);
    const data = await res.text();
    console.log(data);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <p>Signup</p>
      <br />

      <label style={{ textAlign: "center" }} htmlFor="name">
        name
      </label>
      <input
        value={name}
        onChange={updateName}
        style={{ width: "200px" }}
        type="text"
        className="form-control"
        id="username"
      />

      <label style={{ textAlign: "center" }} htmlFor="username">
        Username
      </label>
      <input
        value={username}
        onChange={updateUsername}
        style={{ width: "200px" }}
        type="text"
        className="form-control"
        id="username"
      />
      <br />
      <label style={{ textAlign: "center" }} htmlFor="password">
        Password
      </label>
      <input
        value={password}
        onChange={updatePassword}
        id="password"
        style={{ width: "200px" }}
        type="password"
        className="form-control"
      />
      <button className="btn btn-secondary" onClick={checkLogin}>
        Signup
      </button>
      <Link to="/login">
        <button className="btn btn-primary">Login</button>
      </Link>
    </>
  );
};

export default Signup;
