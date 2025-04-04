import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { appContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Login() {
  const { user, setUser, users } = useContext(appContext);
  const [msg, setMsg] = useState();
  const Navigate = useNavigate();

  const handleSubmit = () => {
    const found = users.find(
      (value) => value.email === user.email && value.password === user.password
    );
    if (found) {
      user.name = found.name;
      Navigate("/");
    } else {
      setMsg("Invalid User");
    }
  };
  return (
    <div className="Login-container">
      <div className="Login-Box">
        <div>
          <h1>Login</h1>
          {msg}
        </div>
        <div>
          <p>
          <input 
              type="text"
              placeholder="Email address"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          </p>
          <p>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </p>
          <p>
            <button onClick={handleSubmit}>Login</button>
          </p>
          <p>
            <Link to="../register">Not Registered? Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}