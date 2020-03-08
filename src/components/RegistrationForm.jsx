import React from 'react'

const RegistrationForm = ({ submitFormHandler }) => {
  return (
    <form onSubmit={submitFormHandler} id='register-form'>
      <label forHtml="email">Email</label>
      <input
        className='ui input'
        name='email'
        type='email'
        id='email'
        placeholder='Email address'
      ></input>
      <label forHtml="password">Password</label>
      <input
        className='ui input'
        name='password'
        type='password'
        id='password'
        placeholder='password'
      ></input>
      <label forHtml="password_confirmation">Confirm Password</label>
      <input
        className='ui input'
        name='password_confirmation'
        type='password'
        id='password_confirmation'
        placeholder='Password again'
      ></input>

      <button id='submit'>
        Submit
      </button>
    </form>
  )
}

export default RegistrationForm
