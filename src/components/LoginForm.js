/*For the admin form login */

import React from 'react';
import useForm from './useForm';
import validate from '../components/ValidateInfo';
import '../css/admin.css'

const LoginForm = (  {submitForm} ) => {
    const {handleChange, values,handleSubmit,errors} = useForm(   submitForm    ,validate);

    return(
       <div className="form-content-right text-center">
           <form className="form" onSubmit={handleSubmit}  >
               <h1 class="style-h1 pt-1 pb-4">ADMIN</h1>

               <div className="form-inputs">
                   <label class="style-inp1 " htmlFor="username" className="form-label">
                   Username</label>
                   <input  id="username" type="text" name="username" className="form-control size mb-3 " placeholder="Enter your name..." 
                   value={values.username}
                   onChange={handleChange}/>
                   {errors.username && <p>{errors.username}</p>}
               </div>
               <div className="form-inputs">
                   <label htmlFor="email" className="form-label">
                   Email</label>
                   <input id="email" type="email" name="email" className="form-control size mb-3" placeholder="Enter your email..." 
                   value={values.email}
                   onChange={handleChange}/>
                   {errors.email && <p>{errors.email}</p>}
               </div>
               <div className="form-inputs">
                   <label htmlFor="password" className="form-label">
                   Password</label>
                   <input id="password" type="password" name="password" className="form-control size" placeholder="Enter your password..." 
                   value={values.passsword}
                   onChange={handleChange}/>
                   {errors.password && <p>{errors.password}</p>}
               </div>
               <button className="form-input-btn mt-3 " type="submit">Login</button>
           </form>
       </div>

    )
}
export default LoginForm;




