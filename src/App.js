import "./App.css";
import React from "react";
import Home from "./screens/home";
import Login from "./screens/login";
import Register from "./screens/register";
import { BrowserRouter, Route, screens } from "react-router-dom";
import Profile from "./screens/profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <screens>
          <Route path="/" element={Home} />
          <Route path="/login" element={Login} />
          <Route path="/register" element={Register} />
          <Route path="/profile" element={Profile} />
        </screens>
      </BrowserRouter>
    </div>
  );
}

export default App;
