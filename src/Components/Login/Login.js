import React from 'react'
import Logins from '../Login/Login.module.css';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div>
        <div className='flex justify-center'>
        <img src={require('../images/formlogo.png')} alt=""/>
        </div>
         
          <div className={Logins.loginform}>
          <h4>Sign in</h4>
              <form>
                    <div className={Logins.loginformdesign}>
                    <label>Email or phone number</label>
                    <input type='text'/>
                    <label>Password</label>
                    <input type='password'/>
                    </div>
              </form>

              <p>By continuing, you agree to Amazon's <Link to=''>Conditions of use</Link> and <Link to=''>Privacy Notice</Link></p>
              
              <div className={Logins.loginbutton}>
              <span>New to amazon</span>
              <br></br>
             <Link to='/signup'> <button>Create your amazon account</button></Link>
              </div>
              
              </div>
    </div>
  )
}

export default Login
