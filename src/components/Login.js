import React, { useState } from "react";
import { db, app } from "../apis/firebase-config";
import { initializeApp } from "firebase/app";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [EmailRegister, setEmailRegister] = useState("");
  const [PasswordRegister, SetPasswordRegister] = useState("");
  const navigate = useNavigate();
  const authentication = getAuth();
  const handleRegister = () => {
    // initializeApp(app);
    console.log(Email);
    createUserWithEmailAndPassword(
      authentication,
      EmailRegister,
      PasswordRegister
    ).then((response) => {
      sessionStorage.setItem(
        "Auth Token",
        response._tokenResponse.refreshToken
      );
      navigate("/create");
    });
  };
  const handleLogin = () => {
    signInWithEmailAndPassword(authentication, Email, Password).then(
      (response) => {
        navigate("/");
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      }
    );
  };

  return (
    <div style={{ backgroundColor: "cyan", textAlign: "center" }}>
      {sessionStorage.getItem("Auth Token") ? (
        <button
          onClick={() => sessionStorage.removeItem("Auth Token")}
          className="Links"
        >
          Logout
        </button>
      ) : (
        <div>Meow</div>
      )}
      <h3>Login</h3>
      <div>
        {" "}
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        ></input>
      </div>
      <div>
        <input
          onChange={(e) => SetPassword(e.target.value)}
          placeholder="Family Password"
        ></input>
      </div>{" "}
      <button onClick={() => handleLogin()}>Login</button> <h3>Register</h3>
      <div>
        {" "}
        <input
          onChange={(e) => setEmailRegister(e.target.value)}
          placeholder="Enter your Email"
        ></input>
      </div>
      <div>
        <input
          onChange={(e) => SetPasswordRegister(e.target.value)}
          placeholder="Family Password"
        ></input>
      </div>{" "}
      <button onClick={() => handleRegister()}>Register</button>
    </div>
  );
}
