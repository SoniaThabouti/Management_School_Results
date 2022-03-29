import React, {useState,useEffect} from 'react';
import LoginForm from '../com/LoginForm'
import Home from './Ind'
import Axios from 'axios';

const Login = () => {

    const [isSubmitted,setIssubmitted] =useState(false);
    function submitForm() {
        setIssubmitted(true);
    }
    const [admins,setadmins]=useState([])
    useEffect(()=>{
      Axios.get("http://localhost:3001/api/admin").then((response)=>{
        setadmins(response.data);
    })
},[]);





    return (
        <div>
            {!isSubmitted ? (
          <LoginForm submitForm={submitForm} />
        ) : (
          <Home />
        )}

        </div>
    );
}

export default Login