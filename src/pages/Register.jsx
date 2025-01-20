import React from 'react'
import Announcement from '../components/Announcement'
import Navba from '../components/Navba'
import './Register.css'

const Register = () => {
    return (
      <div>
        <Announcement />
        <Navba />
        <div className="register">
          <div className="registerin">
            Email
            <input type="text" />
            Password
            <input type='password' />
            Mobile No
            <input type='number' />
            
            <button>Register</button>
          </div>
        </div>
      </div>
    );
}

export default Register