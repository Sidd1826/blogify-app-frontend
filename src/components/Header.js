import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/userContext";

export default function Header()
{
  const {userInfo, setUserInfo} = useContext(userContext)

  useEffect( () => {
    fetch('http://localhost:4000/profile', {credentials: 'include'})
    .then(response => {
      response.json().then( userInfo => {
        setUserInfo(userInfo)} 
        )}
      )
  } , [])

  function logout()
  {
    fetch('http://localhost:4000/logout', {
      credentials: "include",
      method: 'POST',
    })
    setUserInfo(null);
  }
  
  // if userinfo is null then it will not throw error, it will show undefined(use of ?.)
  const username = userInfo?.username;

    return(
        <header>
        <Link to='/' className='logo'>Blogify</Link>
        <nav>
          {username && (
            <>
              {/* <p>Welcome, {username}</p> */}
              <Link to="/create">Create New Post</Link>
              <a onClick={logout}>Logout</a>
            </>
          )}

          {!username && (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
          )}
          
        </nav>
      </header>
    )
}