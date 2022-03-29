/*For the admin to add a professor in the professor's list */

import React, {useState,useEffect} from 'react'
import { Button,Form } from 'react-bootstrap'
import Axios from 'axios'

export default function InputAdd({fct}) {


    const [name,setname]=useState('')
    const [Email,setEmail]=useState('')
    const [Subject,setSubject]=useState('')
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [confirmpassword,setconfirmpassword]=useState('')
    const Mat=['Linux',
   
      'Probabilité',
      'Transmission',
      'Logique',
      'Graphe',
      'Anglais',
      'Finance']
  


    



    const onSubmit=(e)=>{
        e.preventDefault();
        if(!name) {
            alert ('please enter your name')
            return
          }
          if(!Email) {
            alert ('please enter your email')
            return
          }
         if(!Subject) {
            alert ('please enter your subject')
            return
          }
          if(!username) {
            alert ('please enter your username')
            return
          }
          if(!password) {
            alert ('please enter your password')
            return
          }
          if(!confirmpassword) {
            alert ('please enter your confirmed password')
            return
          }
         if(password!==confirmpassword){
          alert ('ERROR! please confirm your password')
          return
         }
        console.log(Subject)
       
         Axios.post("http://localhost:3001/api/insert",{
           Name:name,
           Gmail:Email,
           matiére:Subject,
           Username:username,
           Password:password,})


           {/*Axios.post("http://localhost:3001/api/matiere",{
            matiere:Subject,
           })*/}


         
         

             fct({
               
               name:name,
              gmail:Email,
              matiére:Subject});
          

         setname('');
         setEmail('');
         setSubject('');
         setusername('');
         setpassword('');
         setconfirmpassword('');
         alert('Add profesor with succes')



    };

    return (
        <div >
            <div class="col-md-5 content1">
              <h1 class="style5">Ajouter un professeur</h1>
              <Form onSubmit={onSubmit} >
              <Form.Group className="mb-3" >

              <label for="text" class="float-left styl1">Nom:</label>
               <Form.Control type="text" placeholder="Nom"
               value={name} onChange={(e)=>setname(e.target.value)} />


               <label for="text" class="float-left pt-4 styl1">Email:</label>
              <Form.Control type="text" placeholder="Email "
              value={Email} onChange={(e)=>setEmail(e.target.value)} />


             <label for="text" class="float-left pt-4 styl1">Matiére:</label>
              {/*<Form.Control type="text" placeholder="Matiére"
              value={Subject} onChange={(e)=>setSubject(e.target.value)} />*/}

        <div class="form-group">
    
    <select value={Subject}  onChange={(e)=>setSubject(e.target.value)} class="form-control" id="exampleFormControlSelect1">
      { Mat.map((sub)=>  <option  >{sub}</option> )}
     




    </select>
  </div>

             <label for="text" class="float-left styl1">Username:</label>
               <Form.Control type="text" placeholder="Username"
               value={username} onChange={(e)=>setusername(e.target.value)} />


            <label for="text" class="float-left styl1">Password:</label>
               <Form.Control type="text" placeholder="Password"
               value={password} onChange={(e)=>setpassword(e.target.value)} />

             <label for="text" class="float-left styl1">Confirm password:</label>
               <Form.Control type="text" placeholder="Confirm password"
               value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} />
           

           </Form.Group>

 
           <div class="pt-3 ">

            <Button  class="btn2"   type="submit">
              OK
            </Button>
          </div>
       </Form>
         
        </div>
      </div>
    )
}

