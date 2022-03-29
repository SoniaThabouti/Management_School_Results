/*import React, {useState,useEffect} from 'react'
import { Button,Form } from 'react-bootstrap'
import '../css/prof.css'
import Axios from 'axios'



import InputAdd from '../components/InputAdd'



export default function Prof() {
     const [profs,setprofs]=useState([])
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/select").then((response)=>{
      setprofs(response.data);
    })
  },[]);

const Ajouter =(elment)=>{
   
  setprofs([...profs,elment])

};

    
    const [show,setshow]=useState(false)
   

    return (
        <div>
            
  <body data-spy="scroll" data-target="#navbarResponsive">
    <header>
        <nav class="navbar navbar-expand-lg navbar-light py-3 fixed-top bg1 ">
          <div class="container ">
            <div class="container-fluid">
            <img  alt="logo" src="./img1/logo.png"  href="#" width="250" height="70"/>
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

      <div class="wrapper">
          <h1 class="text-center decor1  ">Liste des professeurs</h1>
          <table class="table table-striped  table-hover">
            <thead>
            <tr>
             
                <th scope="col" >Nom</th>
                <th scope="col" >Email</th>
                <th scope="col" >Matiére</th>
              </tr>

            </thead>
            <tbody>
              
              {profs.map((prof)=><tr>
               
                <th scope="col" class="style-tab">{prof.name}</th>
                <th scope="col" class="style-tab">{prof.gmail}</th>
                <th scope="col" class="style-tab">{prof.matiére}</th>
                <th scope="col">


                </th>
              </tr>
            ) }
            </tbody>
          </table>
          
          <hr class="light" />
          <Button class="btn1" onClick={()=>setshow(!show)}  >Register</Button>

       {show&& <InputAdd fct={Ajouter} />}

      </div>
        
    </body>
    <div id="foot" class="pb-1">
                    <div class="container-fluid padding">
                        <div class="row text-center">
                            <div class="col-12 pt-5">
                                <h5>copyright &copy;2021 all rights reserved</h5>
                            </div>
                        </div>
                    </div>
                </div>
  </div>
    )
}*/


import React, {useState,useEffect} from 'react'
import { Button, } from 'react-bootstrap'
import '../css/prof.css'
import Axios from 'axios'


import InputAdd from '../components/InputAdd'



export default function Prof() {
     const [profs,setprofs]=useState([])
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/select").then((response)=>{
      setprofs(response.data);
    })
  },[]);

const Ajouter =(elment)=>{
   
  setprofs([...profs,elment])

};

    
    const [show,setshow]=useState(false)
   

    return (
        <div>
            
  <body data-spy="scroll" data-target="#navbarResponsive">
    <header>
        <nav class="navbar navbar-expand-lg navbar-light py-3 fixed-top bg1 ">
          <div class="container ">
            <div class="container-fluid">
            <img  alt="logo" src="./img1/logo.png"  href="#" width="250" height="70"/>
              <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon icon-col"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0 float-right text-right">
                  <li class="nav-item">
                    <a class="nav-link ml-5" href="./">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ml-5" href="./#social-links">Contact</a>
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

      <div class="wrapper">
          <h1 class="text-center decor1  ">Liste des professeurs</h1>
          <table class="table table-striped  table-hover">
            <thead>
            <tr>
             
                <th scope="col" >Nom</th>
                <th scope="col" >Email</th>
                <th scope="col" >Matiére</th>
              </tr>

            </thead>
            <tbody>
              
              {profs.map((prof)=><tr>
               
                <th scope="col" class="style-tab">{prof.name}</th>
                <th scope="col" class="style-tab">{prof.gmail}</th>
                <th scope="col" class="style-tab">{prof.matiére}</th>
                <th scope="col">


                </th>
              </tr>
            ) }
            </tbody>
          </table>
          
          <hr class="light" />
          <Button class="btn1" onClick={()=>setshow(!show)}  >Register</Button>

       {show&& <InputAdd fct={Ajouter} />}

      </div>
        
    </body>
    <div id="foot" class="pb-1">
                    <div class="container-fluid padding">
                        <div class="row text-center">
                            <div class="col-12 pt-5">
                                <h5>copyright &copy;2021 all rights reserved</h5>
                            </div>
                        </div>
                    </div>
                </div>
  </div>
    )
}