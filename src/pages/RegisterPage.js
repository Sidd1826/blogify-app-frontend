import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage()
{
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(event)
    {
        event.preventDefault();
        const response = await fetch("http://localhost:4000/register", {
            method: 'POST',
            body: JSON.stringify({name, username, password}),
            headers: {'Content-type': 'application/json'}
        })

        if(response.status === 200)
        {
            // alert("User registered Successfully");
            toast.success("User registered Successfully !");
        }
        else{
            // alert("User registration failed");
            toast.error("User registration failed!");
        }
    } 

    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input  type="text" 
                    placeholder="Full name" 
                    value={name} 
                    onChange={event => setName(event.target.value)} />
            <input  type="text" 
                    placeholder="username" 
                    value={username}
                    onChange={event => setUsername(event.target.value)}/>
            <input  type="password" 
                    placeholder="password" 
                    value={password}
                    onChange={event => setPassword(event.target.value)}/>
            <button>Register</button>
            <ToastContainer/>
        </form>
    )


}