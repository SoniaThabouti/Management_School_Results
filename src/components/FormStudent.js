/*To add a student for the admin*/


import React, {useState,useEffect} from 'react'
import { Button,Form } from 'react-bootstrap'
import Axios from 'axios'

export default function FormStudent({fct}) {


    const [insc,setinsc]=useState('')
    const [nom,setnom]=useState('')
    const [math,setmath]=useState('')
    const [java,setjava]=useState('')
    const [Transmission,setTransmission]=useState('')
    const [Probabilité,setProbabilité]=useState('')
    const [Graphe,setGraphe]=useState('')
    const [Anglais,setAnglais]=useState('')
    const [Finance,setFinance]=useState('')
    const [Linux,setLinux]=useState('')
    const [Logique,setLogique]=useState('')


   

    const [c,setc]=useState('')

  


    



    const onSubmit=(e)=>{
        e.preventDefault();
        if(!insc) {
            alert ('please retry!')
            return
          }
          if(!nom) {
            alert ('please retry!')
            return
          }
          if(!math) {
            alert ('please retry!')
            return
          }
          if(!java) {
            alert ('please retry!')
            return
          }
          if(!c) {
            alert ('please retry!')
            return
          }
         
        
          

           Axios.post("http://localhost:3001/api/student",{
            insc:insc,
            nom:nom,
            math:math,
            c:c,
            java:java,
            Linux:Linux,
            Probabilité:Probabilité,
            Logique:Logique,
            Transmission:Transmission,
            Anglais:Anglais,
            Finance:Finance,
            Graphe:Graphe,
           
        })

             fct({
               
              insc:insc,
              nom:nom,
              math:math,
              c:c,
              java:java,
              Linux:Linux,
              Probabilité:Probabilité,
              Logique:Logique,
              Transmission:Transmission,
              Anglais:Anglais,
              Finance:Finance,
              Graphe:Graphe,
                montrer:1,
            
            });
          

         setinsc('');
         setnom('');
         setmath('');
         setc('');
         setProbabilité('');
         setTransmission('');
         setGraphe('');
         setAnglais('');
         setFinance('');
         setLinux('');
         setLogique('');

    

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


              <label for="text" class="float-left pt-4 styl1">Note de math:</label>
              <Form.Control type="text" placeholder="Note de math"
              value={math} onChange={(e)=>setmath(e.target.value)} />


             <label for="text" class="float-left styl1">Note de C:</label>
               <Form.Control type="text" placeholder="Note de C"
               value={c} onChange={(e)=>setc(e.target.value)} />


            <label for="text" class="float-left styl1">Note de java:</label>
               <Form.Control type="text" placeholder="Note de java"
               value={java} onChange={(e)=>setjava(e.target.value)} />



<label for="text" class="float-left styl1">Note de Probabilité:</label>
               <Form.Control type="text" placeholder="Note de Probabilité"
               value={Probabilité} onChange={(e)=>setProbabilité(e.target.value)} />
               
               <label for="text" class="float-left styl1">Note de Transmission:</label>
               <Form.Control type="text" placeholder="Note de Transmission"
               value={Transmission} onChange={(e)=>setTransmission(e.target.value)} />

<label for="text" class="float-left styl1">Note de Graphe:</label>
               <Form.Control type="text" placeholder="Note de Graphe"
               value={Graphe} onChange={(e)=>setGraphe(e.target.value)} />


<label for="text" class="float-left styl1">Note de l'anglais:</label>
               <Form.Control type="text" placeholder="Note de l'anglais"
               value={Anglais} onChange={(e)=>setAnglais(e.target.value)} />


<label for="text" class="float-left styl1">Note de Finance:</label>
               <Form.Control type="text" placeholder="Note de Finance"
               value={Finance} onChange={(e)=>setFinance(e.target.value)} />


<label for="text" class="float-left styl1">Note de Linux:</label>
               <Form.Control type="text" placeholder="Note de Linux"
               value={Linux} onChange={(e)=>setLinux(e.target.value)} />

               
<label for="text" class="float-left styl1">Note de Logique:</label>
               <Form.Control type="text" placeholder="Note de Logique"
               value={Logique} onChange={(e)=>setLogique(e.target.value)} />


             
           

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
