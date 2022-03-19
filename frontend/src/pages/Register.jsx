import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData;

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
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id='name' name='name' value={name} placeholder="Enter your name" onChange={onChange} className="form-control" />
          </div>
          <div className="form-group">
            <input type="email" id='email' name='email' value={email} placeholder="Enter your email" onChange={onChange} className="form-control" />
          </div>
          <div className="form-group">
            <input type="password" id='password' name='password' value={password} placeholder="Enter your password" onChange={onChange} className="form-control" />
          </div>
          <div className="form-group">
            <input type="password" id='password2' name='password2' value={password2} placeholder="Confirm password" onChange={onChange} className="form-control" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Register</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register