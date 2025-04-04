import React from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import { appContext } from "../App";
export default function Register() {

   const { users, setUsers, user, setUser } = useContext(appContext);
  const [msg, setMsg] = useState();
  const msgRef = useRef();
  const Navigate = useNavigate()
  const handleSubmit = () => {
    const found = users.find((value) => value.email === user.email);
    if (found) {
      setMsg("User already exists");
      msgRef.current.style.color = "red";
    } else {
      setMsg();
      setUsers([...users, user]);
      //setUser({ ...user, name: "", email: "", password: "" });
      Navigate("/")
    }
  };
  const handleDelete = (email) => {
    setUsers(users.filter((value) => value.email != email));
  };

  return (
    <div className="Register-container">
      <div className="Register-Box">
        <div>
          <h1>Register</h1>
          <p ref={msgRef}>{msg}</p>
        </div>
        <div>
        <p>
          <input
            type="text"
            value={user.name}
            placeholder="Enter Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="text"
            value={user.email}
            placeholder="Email address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="password"
            value={user.password}
            placeholder="New password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
        </p>
        <p>
          <button onClick={handleSubmit}>Submit</button>
        </p>
        <p>
          <Link to="../login">Already a member? Login here!</Link>
        </p>
        </div>
      </div>
      <div className="Register-Box2">
        <h2>User List</h2>
        <table className="App-Register-Tab">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((value, index) => (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
                <td>
                  <button onClick={() => handleDelete(value.email)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}