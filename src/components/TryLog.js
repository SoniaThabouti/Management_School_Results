/*For the user(professor) form to login */

import React,{useState,useEffect} from 'react'
import Axios from 'axios';

export default function TryLog({submitForm,handle}) {
    const [tableau,settableau]=useState([])
 useEffect(()=>{
   Axios.get("http://localhost:3001/api/user").then((response)=>{
     settableau(response.data);
   })
 },[]);
 const matiéres=tableau.map((one)=>one.matiére)
const users=tableau.map((one)=>one.username)
const passwords=tableau.map((one)=>one.password)
 const [User,setUser]=useState('')
 const [Pass,setPass]=useState('')
const onSubmit=()=>{
    if(users.includes(User)){
        if(passwords.includes(Pass)){
            if( 
                 users.indexOf(User)===passwords.indexOf(Pass)
              ){
                const yoo=users.indexOf(User);
                const bro=matiéres[yoo];
                handle(bro);
                submitForm()        
            }
            else   alert('please retry!')

        }

         
        else alert('please retry!')

    }
    else alert('please retry!')



}

    return (
        <div className="form-content-right text-center">
        <form className="form" onSubmit={onSubmit}  >
            <h1 class="style-h1 pt-1 pb-4">User</h1>

            <div className="form-inputs">
                <label class="style-inp1 " htmlFor="username" className="form-label">
                Username</label>
                <input  id="username" type="text" name="username" className="form-control size mb-3 " placeholder="Enter your name..." 
               value={User} onChange={(e)=>setUser(e.target.value)}
               />
                
            </div>
   
            <div className="form-inputs">
                <label htmlFor="password" className="form-label">
                Password</label>
                <input id="password" type="password" name="password" className="form-control size" placeholder="Enter your password..." 
                  value={Pass} onChange={(e)=>setPass(e.target.value)}
               />
      
            </div>
            <button className="form-input-btn mt-3 "  type="submit"> Login</button>
        </form>
      
    </div>

    )
}