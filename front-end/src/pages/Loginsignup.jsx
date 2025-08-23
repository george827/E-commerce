import React, {useState} from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const login = async() => {
    // Implement login functionality here
    console.log("Logging in...", formData);
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.success){
        localStorage.setItem("token", data.token);
        window.location.href = "/"; // Redirect to home page
        alert(data.message);
      } else {
        alert(data.message);
      }
    });
  }

  const signup = async() => {
    // Implement signup functionality here
    console.log("Signing up...", formData);
    const response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.success){
        localStorage.setItem("token", data.token);
        window.location.href = "/"; // Redirect to home page
        alert(data.message);
      } else {
        alert(data.message);
      }
    });
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state} </h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && <input name="name" type="text" placeholder='Your name' value={formData.name} onChange={changeHandler} />}
          <input name="email" type="email" placeholder='Email address' value={formData.email} onChange={changeHandler} />
          <input name="password" type="password" placeholder='password' value={formData.password} onChange={changeHandler} />
        </div>
        <button onClick={state === "Login" ? login : signup}>Continue</button>
        {state === "Login" ? (
          <p className='loginsignup-login'> Create an Account? 
            <span onClick={() => setState("Sign Up")}>Sign Up</span>
          </p>
        ) : (
          <p className='loginsignup-login'> Already have an Account?
            <span onClick={() => setState("Login")}>Log In</span>
          </p>
        )}
        {state === "Sign Up" && (
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id='' />
            <p>I agree to the <span>Terms of Use</span> and <span>Privacy Policy</span></p>
          </div>
        )}
      </div>
    </div>
  )
}
