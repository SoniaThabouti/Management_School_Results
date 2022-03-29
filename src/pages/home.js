/*The home page */

import React, {Component} from 'react';
import '../css/home.css'
import Login from './admin'
import LoginProf from './user'


class Home extends Component {
    render() {
        return(
            <div >
                <div /*className="medium-12 columns"*/>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-light py-3 fixed-top bg">
                    <div class="container">
                        <div class="container-fluid">
                        <img  alt="logo" src="./img1/logo.png"  href="#" width="250" height="70"/>
                        <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon icon-col"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto mb-2 mb-lg-0 float-right text-right">
                            <li class="nav-item">
                                <a class="nav-link ml-5" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ml-5" href="#social-links">Connect</a>
                            </li>
                            
                            </ul>
                        </div>
                        </div>
                    </div>
                    </nav>
                </header>


                <section id="home">
                <video  src="img1/video.mp4" autoPlay muted loop />
                    <div class="container">
                    <div class="row pt-5">
                        <div class="home-text col-md-8 col-sm-12 mt-5">
                            <h1 class="simple">Gestion de notes</h1>
                            <p>Gestion de notes facile et sécurisée</p>
                            <ul class="section-btn col-1 ">
                                <a href="./admin" ><span data-hover="Admin">Admin</span></a>
                                
                            </ul>
                            <ul class="section-btn col-1 ">
                                <a href="./user" ><span data-hover="Professor">Professor</span></a>
                                
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div class="overplay"></div>
                </section>

                <footer >
                    <div class="container-fluid padding ">
                    <section id="social-links" class="h-100 py-5 distance">
                    <div class="container-fluid padding">
                        <div class="row text-center padding">
                            <div class="col-12">
                                <h2 class="col-foot1">Connect</h2>
                            </div>
                            <div class="col-12 social padding">
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    </section>
                            <div class="col-12 pt-5 col-foot text-center">
                                <h5>copyright &copy;2021 all rights reserved</h5>
                            </div>
                        </div>
                </footer>
                </div>
            </div>
        );
    }
}
export default Home;