import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from "./components/Login/LoginPage";
import Home from "./components/Home";

function App() {
  const adminUser = {
    username: "FMadmin",
    password: "+34Myojwa"
  }

  const [ user, setUser ] = useState({username: "", password: ""});
  const [ error, setError ] = useState("");
  const [ isLoggedIn, setLoggedIn ] = useState(false)

  const Login = details => {
    console.log(details);

    if (details.username == adminUser.username && details.password == adminUser.password) {
      console.log ("Logged in");
      setUser({
        username: details.username
      })
      setLoggedIn(true)
    } else {
      console.log("Login not found")
      setError("Login not found")
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({username: "", password: ""})
  }

  return (
    <>
    {isLoggedIn ? (
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </Router>
    ) :
    (
      <LoginPage Login={Login} error={error} />
    )
    }</>);
}

export default App;
