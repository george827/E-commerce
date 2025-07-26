import React from 'react'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>sign UP</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Email address' />
          <input type="password" placeholder='password' />
        </div>
      </div>
    </div>
  )
}
