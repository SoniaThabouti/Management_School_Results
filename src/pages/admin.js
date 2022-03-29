/*The login form for the admin */

import React, {useState} from 'react';
import LoginForm from '../components/LoginForm'
import Logged from './admin-logged'


const Login = () => {

    const [isSubmitted,setIssubmitted] =useState(false);
    function submitForm() {
        setIssubmitted(true);
    }

    return (
        <div>
            
            {!isSubmitted ? (
          <LoginForm submitForm={submitForm} />
        ) : (
          <Logged />
        )}

        </div>
    );
}

export default Login;


