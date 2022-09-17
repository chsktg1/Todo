import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // if (Cookies.get("jwt") !== null) {
  //    const navigate = useNavigate();;
  // }
  const navigate = useNavigate();
  const checkLogin = async () => {
    const body = { username, password };
    const options = {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const res = await fetch("http://localhost:3001/login", options);
    console.log(res);
    if (res.ok) {
      const data = await res.json();
      Cookies.set("jwt", data["msg"]);
      // return <Navigate to="/todos" />;
      navigate("/todos");
    }
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <p>Login</p>
      <br />
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
      <button onClick={checkLogin}>Login</button>
    </>
  );
};

export default Login;
