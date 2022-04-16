import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbarr from '../../../components/navbar/Navbar'
import './Auth.css'
export default function Auth () {

// Partie création compte

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPsw, setconfirmPsw] = useState("");
  const navigate = useNavigate()
	const [error, setError] = useState("");
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const url = 'http://localhost:5000/api/users'
      const newUser= {
        email: email,
        password: password,
        confirmPsw:confirmPsw
   }
   console.log(newUser)
   axios.post(url,newUser)
  
      //  navigate("/");
     
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
      }
    }
  }

  // partie authentification
  const [my_email, setmy_email] = useState("");
  const [my_password, setmy_password] = useState("");
  const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/auth";
      const user = {
        email: my_email,
        password: my_password
      }
			const data = await axios.post(url, user);
		 console.log(user)

			 localStorage.setItem("token", data);
       window.location = "/avancement";
	
		}catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};


  useEffect(() => {
    const switchers = [...document.querySelectorAll('.switcher')]

    switchers.forEach(item => {
      item.addEventListener('click', function () {
        switchers.forEach(item =>
          item.parentElement.classList.remove('is-active')
        )
        this.parentElement.classList.add('is-active')
      })
    })
  })
  return (
    <div>
      <Navbarr />
      <section id='auth' className='forms-section'>
        <div className='forms'>
          <div className='form-wrapper is-active'>
            <button type='button' className='switcher switcher-login'>
              Login
              <span className='underline'></span>
            </button>
            <form onSubmit={handleLogin} className='form form-login'>
              <fieldset>
                <legend>
                  Please, enter your email and password for login.
                </legend>
                <div className='input-block'>
                  <label htmlFor='login-email'>E-mail</label>
                  <input onChange={(event)=> setmy_email(event.target.value)} id='login-email' type='email' required />
                </div>
                <div className='input-block'>
                  <label htmlFor='login-password'>Password</label>
                  <input onChange={(event)=> setmy_password(event.target.value)} id='login-password' type='password' required />
                </div>
              </fieldset>
              <button type='submit' className='btn-login'>
                Login
              </button>
            </form>
          </div>
          <div className='form-wrapper'>
            <button type='button' className='switcher switcher-signup'>
              S'identifier
              <span className='underline'></span>
            </button>

            {/* partie création du compte  */}

            <form onSubmit={handleSubmit} className='form form-signup'>
              <fieldset>
                <legend>
                
                </legend>
                <div className='input-block'>
                  <label htmlFor='signup-email'>E-mail</label>
                  <input
                    id='signup-email'
                    type='email'
                    onChange={(event)=>setEmail(event.target.value)}
                    
                    required
                  />
                </div>
                <div className='input-block'>
                  <label htmlFor='signup-password'>Password</label>
                  <input
                    id='signup-password'
                    type='password'
                    required
                    onChange={(event)=>setpassword(event.target.value)}
                    
                   
                  />
                </div>
                <div className='input-block'>
                  <label htmlFor='signup-password-confirm'>Confirm password</label>
                  <input
                    id='signup-password-confirm'
                    type='password'
                    onChange={(event)=>setconfirmPsw(event.target.value)}

                  
                    required
                  />
                </div>
              </fieldset>
              <button type='submit' className='btn-signup'>
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
