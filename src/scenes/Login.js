import { useState } from "react"

export default function Login({setToken, setIsUser}){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => setToken(data.token))
    .catch(alert)
  }

    return (
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Email:
                <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
            </label> <br />
            <label> Password
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label> <br />
            <input type='submit' value='Login' />
        </form> <br />
        <button onClick={() => setIsUser(false)}>
            Sign up
        </button>
        </>
    )
}