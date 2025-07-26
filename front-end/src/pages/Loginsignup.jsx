import React from 'react'
import './CSS/LoginSignup.css'

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
        <button>Continue</button>
        <p className='loginsignup-login'> Already have an Account? 
          <span>Logn In</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id='' />
          <p>I agree to the <span>Terms of Use</span> and <span>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  )
}
