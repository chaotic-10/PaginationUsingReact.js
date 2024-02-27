import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [action, setAction] = useState('SignUp');

  return (
    <div>
      <div className="container">   
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
       
            {action==="login"?<div></div>: <div className="input">
          <label htmlFor="">name</label>
          <input type="text" />
        </div>}
           
        <div className="input">
          <label htmlFor="">email</label>
          <input type="text" />
        </div>
        <div className="input">
          <label htmlFor="">password</label>
          <input type="text" />
        </div>
        <div className="lost-password">lost password?<span style={{cursor:'pointer'}}>click here!</span></div>
        <div className='submit-container'>
          <div className={action === "login" ? "submit gray" : "submit"} onClick={() => { setAction("SignUp") }}>Sign up</div>
          <div className={action === "SignUp" ? "submit gray" : "submit"} onClick={() => { setAction("login") }}>Login</div>
        </div>
        
      </div>
    </div>
  );
}

export default Form;
