/*The user login form */

import React, {useState} from 'react';
import Students from './students';
import TryLog from '../components/TryLog';

const LoginProf = () => {

    const [isSubmitted,setIssubmitted] =useState(false);
    function submitForm() {
        setIssubmitted(true);
    }
    const [lamatiére,setlamatiére] =useState('');
    function handlematiére(one) {
        setlamatiére(one);
    }

    return (
        <div>
            
            {!isSubmitted ? (

<TryLog submitForm={submitForm} handle={handlematiére} />) : (
          <Students seul={lamatiére} />
        )}

        </div>
    );
}



export default LoginProf;