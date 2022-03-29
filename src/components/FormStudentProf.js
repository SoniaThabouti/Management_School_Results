/*For professors to add a student and the result in the specific subject*/

import React, {useState,useEffect} from 'react'
import { Button,Form } from 'react-bootstrap'
import Axios from 'axios'

export default function FormStudentProf({fct,val}) {


    const [insc,setinsc]=useState('')
    const [nom,setnom]=useState('')
   
    const [sub,setsub]=useState('')

    const onSubmit=(e)=>{
        e.preventDefault();
        if(!insc) {
            alert ('please enter your name')
            return
          }
          if(!nom) {
            alert ('please enter your email')
            return
          }
         
         
        
   
           Axios.post("http://localhost:3001/api/studentprof",{
           insc:insc,
            nom:nom,
            mat:val,
            sub:sub,
            montrer:1,
        })

        if(val==='Transmission'){

          fct({
           insc:insc,
           nom:nom,
           Transmission:sub,
           montrer:1,
         
         });}
         
        if(val==='Finance'){

          fct({
           insc:insc,
           nom:nom,
           Finance:sub,
           montrer:1,
         
         });}
         if(val==='Probabilité'){

          fct({
           insc:insc,
           nom:nom,
           Probabilité:sub,
           montrer:1,
         
         });}
         
        if(val==='Graphe'){

          fct({
           insc:insc,
           nom:nom,
           Graphe:sub,
           montrer:1,
         
         });}
         
        if(val==='Anglais'){

          fct({
           insc:insc,
           nom:nom,
           Anglais:sub,
           montrer:1,
         
         });}
         
        if(val==='Logique'){

          fct({
           insc:insc,
           nom:nom,
           Logique:sub,
           montrer:1,
         
         });}
         
        if(val==='Linux'){

          fct({
           insc:insc,
           nom:nom,
           Linux:sub,
           montrer:1,
         
         });}
      

  

         setinsc('');
         setnom('');
         setsub('');
         alert('Add student with succes')



    };

    return (
        <div >
            <div class="col-md-5 content1">
              <h1 class="style5">Ajouter un éleve</h1>
              <Form onSubmit={onSubmit} >
              <Form.Group className="mb-3" >

              <label for="text" class="float-left styl1">Numéro d'inscription:</label>
               <Form.Control type="text" placeholder="Numéro d'inscription"
               value={insc} onChange={(e)=>setinsc(e.target.value)} />


               <label for="text" class="float-left pt-4 styl1">Nom</label>
              <Form.Control type="text" placeholder="Nom "
              value={nom} onChange={(e)=>setnom(e.target.value)} />
         
              <label for="text" class="float-left styl1">Note de {val}</label>
               <Form.Control type="text" placeholder="Note de java"
               value={sub} onChange={(e)=>setsub(e.target.value)} />
       
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
