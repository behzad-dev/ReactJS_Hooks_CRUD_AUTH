import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./stylesheets/App.css";
import history from "../apis/history";

import HelloWorld from "./HelloWorld";
import MyClass from "./MyClass";
import MenuBar from "./MenuBar";
import DataCreate from "./DataCreate";
import DataFetchOne from "./DataFetchOne";
import DataList from "./DataList";
import DataUpdate from "./DataUpdate";
import DataDelete from "./DataDelete";
import Login from "./Login";
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <MenuBar />
        <Routes>
          <Route path="/" exact element={<DataList />}></Route>{" "}
          <Route path="/Create" exact element={<DataCreate />}></Route>
          <Route path="/Update" exact element={<DataUpdate />}></Route>
          <Route path="/Delete" exact element={<DataDelete />}></Route>
          <Route path="/FetchOne" exact element={<DataFetchOne />}></Route>
          <Route path="/Login" exact element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
