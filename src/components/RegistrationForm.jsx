import React from 'react'

const RegistrationForm = ({ submitFormHandler }) => {
  return (
    <form onSubmit={submitFormHandler} id='register-form'>
      <label className='ui pointing below label'>
        <i class='mail icon'></i>Email
      </label>
      <input
        className='ui input'
        name='email'
        type='email'
        id='email'
        placeholder='Search...'
      ></input>
      <label className='ui pointing below label'>Password</label>
      <input
        className='ui input'
        name='password'
        type='password'
        id='password'
        placeholder='Search...'
      ></input>
      <label className='ui pointing below label'>Confirm Password</label>
      <input
        className='ui input'
        name='password_confirmation'
        type='password'
        id='password_confirmation'
        placeholder='Search...'
      ></input>

      <button className='ui primary button' id='submit'>
        Submit
      </button>
    </form>
  )
}

export default RegistrationForm
