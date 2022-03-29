/*The welcome page in case the admin logged in successfully */

import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import '../css/logged.css'
import Prof from './prof';
import Student from './student';
export default function Logged(){
   return(
   <div>
       <body data-spy="scroll" data-target="#navbarResponsive">
          <div class="wrapper2">
            <header>
                <nav class="navbar navbar-expand-lg navbar-light py-3 fixed-top ">
                  <div class="container ">
                    <div class="container-fluid">
                    <img  alt="logo" src="./img1/logo.png"  href="#" width="250" height="70"/>
                      <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon icon-col"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0 float-right text-right">
                          <li class="nav-item">
                            <a class="nav-link ml-5" href="index.html">Home</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link ml-5" href="home/#social-links">Connect</a>
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
            <div class="wrapper3">
            <h1 class="text-center style-h">Welcome!</h1>
            <p class="pt-4" style={{fontSize:'25px'}}>Vous pouvez maintenant gérer facilement la liste des professeurs ainsi que celle des étudiants </p>
             <div class="text-center" >
                    <ul class="sect-btn col-1 " style={{marginRight:'5%',display:'inline-block'}}>
                                <a href="./prof" ><span data-hover="Professors">Professors</span></a>
                                        
                    </ul>
                    <ul class="sect-btn col-1 "style={{marginLeft:'30%',display:'inline-block'}}>
                        <a href="./student" ><span data-hover="Students">Students</span></a>
                                        
                    </ul>
             </div>
            </div>
         </div>
    </body>
    <div class="col-12 pt-5 text-center">
              <h5>copyright &copy;2021 all rights reserved</h5>
             </div>
</div>
   );
}