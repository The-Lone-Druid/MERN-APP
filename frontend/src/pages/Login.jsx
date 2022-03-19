import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData;

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" id='email' name='email' value={email} placeholder="Enter your email" onChange={onChange} className="form-control" />
          </div>
          <div className="form-group">
            <input type="password" id='password' name='password' value={password} placeholder="Enter your password" onChange={onChange} className="form-control" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Login</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login