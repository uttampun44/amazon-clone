import React from 'react'
import Account from './Signup.module.css'
import InfoIcon from '@mui/icons-material/Info';

function Signup() {
  return (
    <div className={Account.createaccount}>
    <img src={require('../images/formlogo.png')} alt=''/>
    <div className={Account.heading}>
     <h2>Create account</h2>
       <div className={Account.form}>
        
       <form>
          <div className={Account.labelandinput}>
           <label htmlFor='yourname'>Your name</label>
           <br></br>
           <input type='text' name='yourname' autoComplete='off' required/>
           <br></br>
           <label htmlFor='email'>Email</label>
           <br></br>
           <input type='email' name='email' autoComplete='off'   required/>
           <br></br>
           <label htmlFor='password'>Password</label>
           <br></br>
           <input type='password' placeholder='At least 6 characters' id='password' name='password' autoComplete='off'   required/>
           <br></br>
          <div className={Account.alert}>
          <InfoIcon  htmlcolor='red'/><span>
          Passwords must be at least 6 characters.</span>
          </div>
          <label htmlFor='repassword'>Re-enter password</label>
          <br></br>
          <input type='password' name='repassword' autoComplete='off' required/>

           <div className={Account.create}>
            
              <button type='submit'> Create your Amazon account</button>
           </div>

           <div className={Account.termsofuse}>
            <p>By creating an account, you agree to the Amazon</p>
            <a href='#contact'>Conditions of Use and Privacy Notice.</a>
           </div>
           <div className={Account.alreadyaccount}>
              <span>Already have an account?</span> &nbsp; <a href="#sign">Sign in</a>
           </div>
       </div>
       
        </form>
       </div>

  </div>

  <div className={Account.footer}>
  <div className={Account.footerchild}>
 
   <span><a href='#terms'>Terms and Privacy Notice</a></span> <span><a href='#send'>Send us Feedback</a></span> <span><a href='#help'>Help</a></span>
  </div>
  <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
  
</div>
</div>
  )
}

export default Signup
