
import "./App.css"

import  { useState } from "react"

import LoginButton from "./components/LoginButton"

import LogoutButton from "./components/LogoutButton"

import HomePage from "./components/HomePage"

function App() {
  let [loggedIn, setloggedIn] = useState(false)

  function loginHandler() {
    setloggedIn(true)
  }

  function logOutHandler() {
    setloggedIn(false)
  }
  
  // What to render?

  const contact = (loggedIn === true) ? (
      <>
        <HomePage />

        <LogoutButton logout={logOutHandler} />
      </>) :
      (
      <>
        <LoginButton login={loginHandler} />
      </>
    )
    
    return (
	    <>
		    {contact}
	    </>
    
    )
  
}

export default App
