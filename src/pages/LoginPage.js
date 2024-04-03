import { useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userContext } from "../context/userContext";


export default function LoginPage()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(userContext);

    async function login(event)
    {
        event.preventDefault();

        const response = await fetch("http://localhost:4000/login", {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-type': 'application/json'},
            credentials:'include'
        })

        if(response.status === 200)
        {
            // alert("User registered Successfully");
            // toast.success("Login Successfull!");
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            })
        }
        else{
            // alert("User registration failed");
            toast.error("Login failed!");
        }

    }

    if(redirect)
    {
        return <Navigate to={'/'}/>
    }


    return (
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input  type="text" 
                    placeholder="username" 
                    value={username}
                    onChange={ (e) => setUsername(e.target.value) }/>
            <input  type="password" 
                    placeholder="password" 
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}/>
            <button>Login</button>
            <ToastContainer />
        </form>
    )


}