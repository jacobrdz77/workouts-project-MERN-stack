import React, {useState} from 'react'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email, password)
    }

  return (
    <form className='signup' onSubmit={submitHandler}>
        <h3>Sign up</h3>

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign up</button>
    </form>
  )
}

export default SignUp