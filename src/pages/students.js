/*The student's list for the professor with the specific subject results */

import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import '../css/students.css'
import Axios from 'axios'
import FormStudentProf from '../components/FormStudentProf.js'
import ReactHTMLTableToExcel from "react-html-table-to-excel";




export default function Students({seul}) {
  const Mat=['Linux',
   'Probabilité',
   'Transmission',
   'Logique',
   'Graphe',
   'Anglais',
   'Finance']



    const DeletePerson = (ins) => {
        setnotet(notet.filter((friend)=> friend.insc !== ins));

        Axios.delete(`http://localhost:3001/api/delete/${ins}` )
        alert('delete student with success')

      };

  
      const changer =(ins)=>{
        const newnotet = notet.map((item) => {
          if (item.insc === ins) {
           
            const updatedItem = {
              ...item,
              montrer:0,
            };
     
            return updatedItem;
          }
          console.log(notet)
          return item;
        });
   
        setnotet(newnotet);
  
      }
      
    

    const changertout =(int)=>{
      const newnotet = notet.map((item) => {
       
        if (item.insc === int) {
          const updatedItem = {
            insc:int,
            nom:esm,
            math:mark,
            c:mark1,
            java:mark2,
            Linux:mark3,
            Probabilité:mark4,
            Logique:mark6,
            Transmission:mark5,
            Anglais:mark8,
            Finance:mark9,
            Graphe:mark7,
            montrer:1,
          };
          

            
if(seul==='Linux'){ Axios.put("http://localhost:3001/api/update",{
            
  nom:esm,
  Sub:mark3,
  str:'Linux',


 id:int,
})}
if(seul==='Probabilité'){ Axios.put("http://localhost:3001/api/update",{
            
  nom:esm,
  Sub:mark4,
  str:'Probabilité',

 id:int,
})}
if(seul==='Logique'){ Axios.put("http://localhost:3001/api/update",{
            
  nom:esm,
  Sub:mark6,
  str:'Logique',



 id:int,
})}
if(seul==='Transmission'){ Axios.put("http://localhost:3001/api/update",{
            
  nom:esm,
  Sub:mark5,
  str:'Transmission',



 id:int,
})}
if(seul==='Anglais'){ Axios.put("http://localhost:3001/api/update",{
            
  nom:esm,
  Sub:mark8,
  str:'Anglais',



 id:int,
})}
if(seul==='Finance'){ Axios.put("http://localhost:3001/api/update",{
            
  nom:esm,
  Sub:mark9,
  str:'Finance',



 id:int,
})}
if(seul==='Graphe'){ Axios.put("http://localhost:3001/api/update",{
            
  nom:esm,
  Sub:mark7,
  str:'Graphe',



 id:int,
})}

       




          alert('Change with  success')

         
          setesm('')
          setmark('')
          setmark1('')
          setmark2('')
          setmark3('')
          setmark4('')
          setmark5('')
          setmark6('')
          setmark7('')
          setmark8('')
          setmark9('')
         
          
          return updatedItem;
        }
       
        return item;
       
      });
 
      setnotet(newnotet);
    }


    const Add =(elment)=>{
   
        setnotet([...notet,elment])
      
      };



  
    
      const [insc,setinsc]=useState('')
      const [esm,setesm]=useState('')
      const [mark,setmark]=useState('')
      const [mark1,setmark1]=useState('')
      const [mark2,setmark2]=useState('')
      const [mark3,setmark3]=useState('')
      const [mark4,setmark4]=useState('')
      const [mark5,setmark5]=useState('')
      const [mark6,setmark6]=useState('')
      const [mark7,setmark7]=useState('')
      const [mark8,setmark8]=useState('')
      const [mark9,setmark9]=useState('')
    

    const [view,setview]=useState(false)
 
    


    

    const [notet,setnotet]=useState([])
    useEffect(()=>{
      Axios.get("http://localhost:3001/api/student").then((response)=>{
        setnotet(response.data);
      })
    },[]);

   






 






    

    return (
        <div>
            
          <body data-spy="scroll" data-target="#navbarResponsive">
          <div class="wrapper">
            <header>
                <nav class="navbar navbar-expand-lg navbar-light py-3 fixed-top bg2 ">
                  <div class="container ">
                    <div class="container-fluid">
                    <img  alt="logo" class="float-left" src="./img1/logo.png"  href="#" width="250" height="70"/>
                      <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon icon-col"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0 float-right text-right">
                          <li class="nav-item">
                            <a class="nav-link ml-5" href="./">Home</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link ml-5" href="./#social-links">Connect</a>
                          </li>
                          <li class="nav-item ml-5">
                            <a class="nav-link" href="./">Logout</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  </nav>
            </header>
            <section id="add" class="h-100 py-5">
                
                   

                  <div class="wrapper">
                      <h1 class="text-center decor">Liste des étudiants de {seul}</h1>
                    <table class="table ">
                    <thead>
                          <tr>
                            <th scope="col">N°inscription</th>
                            <th scope="col">Name</th>
                            {seul==='math'?<th scope="col">Math</th>:''}
                            {seul==='c'?<th scope="col">C</th>:''}
                            {seul==='java'?<th scope="col">Java</th>:''}
                            {seul==='Linux'?<th scope="col">Linux</th>:''}
                            {seul==='Probabilité'?<th scope="col">Probabilité</th>:''}
                            {seul==='Transmission'?<th scope="col">Transmission</th>:''}
                            {seul==='Logique'?<th scope="col">Logique</th>:''}
                            {seul==='Graphe'?<th scope="col">Graphe</th>:''}
                            {seul==='Anglais'?<th scope="col">Anglais</th>:''}
                            {seul==='Finance'?<th scope="col">Finance</th>:''}
                         




                            <th scope="col">Delete</th>
                            <th scope="col">Change</th>

                          </tr>
                        </thead>
                        <tbody>
                       
                        {notet.map((note)=> <tr>
                            <th scope="row" class="style-tab"> {note.insc}</th>

                            <td>{note.montrer===1? note.nom: <input onChange={(e)=>setesm(e.target.value)}  placeholder={note.nom} style={{width:80}}  type='text' />} </td> 

                            {seul==='math'?<td>{note.montrer===1? note.math: <input onChange={(e)=>setmark(e.target.value)}  placeholder={note.math} style={{width:80}} type='text' />}</td>:''}
                            {seul==='c'?<td>{note.montrer===1? note.c: <input onChange={(e)=>setmark1(e.target.value)}  placeholder={note.c} style={{width:80}} type='text' />}</td>:''}
                            {seul==='java'?<td>{note.montrer===1? note.java: <input onChange={(e)=>setmark2(e.target.value)}  placeholder={note.java} style={{width:80}} type='text' />}</td>:''}
                            {seul==='Linux'?<td>{note.montrer===1? note.Linux: <input onChange={(e)=>setmark3(e.target.value)}  placeholder={note.Linux} style={{width:80}} type='text' />}</td>:''}
                            {seul==='Probabilité'?<td>{note.montrer===1? note.Probabilité: <input onChange={(e)=>setmark4(e.target.value)}  placeholder={note.Probabilité} style={{width:80}} type='text' />}</td>:''}
                            {seul==='Transmission'?<td>{note.montrer===1? note.Transmission: <input onChange={(e)=>setmark5(e.target.value)}  placeholder={note.Transmission} style={{width:80}} type='text' />}</td>:''}
                            {seul==='Logique'?<td>{note.montrer===1? note.Logique: <input onChange={(e)=>setmark6(e.target.value)}  placeholder={note.Logique} style={{width:80}} type='text' />}</td>:''}
                            {seul==='Graphe'?<td>{note.montrer===1? note.Graphe: <input onChange={(e)=>setmark7(e.target.value)}  placeholder={note.Graphe} style={{width:80}} type='text' />}</td>:''}
                            {seul==='Anglais'?<td>{note.montrer===1? note.Anglais: <input onChange={(e)=>setmark8(e.target.value)}  placeholder={note.Anglais} style={{width:80}} type='text' />}</td>:''}
                            {seul==='Finance'?<td>{note.montrer===1? note.Finance: <input onChange={(e)=>setmark9(e.target.value)}  placeholder={note.Finance} style={{width:80}} type='text' />}</td>:''}

                            

                            <td><button class="btn-sup text-center" onClick={()=>DeletePerson(note.insc)} >Delete</button></td>
                            <td>
                              {note.montrer===1?<button class="btn-mod text-center" onClick={()=>changer(note.insc)}   >Change</button>:
                              <button class="btn-mod text-center" onClick={()=>changertout(note.insc)}   >OK</button>
                              }
                              </td>
                          </tr>)
                          }
                          
                        </tbody>
                      </table>

                      <hr class="light" />

                      <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="download-table-xls-button"
                        table="table-to-xls"
                        filename="tablexls"
                        sheet="tablexls"
                        buttonText="Download as XLS"
                    />

                      <div class="mt-5">
                        <Button onClick={()=>setview(!view)}  style={{textAlign:'center',background:'#',border:'none', margin:'auto'}} > Ajouter étudiant</Button>
                        {view?<FormStudentProf  fct={Add} val={seul}/>:''}
                    
                      </div>

                </div>
            

            </section>
            

            <footer1>
                    <div class="container-fluid padding">
                        <div class="row text-center">
                            <div class="col-12 pt-5">
                                <h5>copyright &copy;2021 all rights reserved</h5>
                            </div>
                        </div>
                    </div>
                </footer1>

            </div>
        </body>
    </div>
    )
}