import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import AddApi from "../AddApi";
import Footer from "../Component/Footer/Footer"



import DisplayAllApi from "../DisplayAllApi"
import { Container ,Row , Col} from "react-router-bootstrap"

import { BrowserRouter, Route, Switch,NavLink } from 'react-router-dom';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";



const NavbarApi = () => {
    return(

      <>
      

         <div className="App">
                  <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home"> Employee Data () </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                  <ReactBootStrap.Nav className="mr-auto">

                  </ReactBootStrap.Nav>

                  <ReactBootStrap.Nav>
                   <ul className="navbar-nav ml-auto">
                     <li className="nav-item active">
                       <NavLink class="nav-link" to="/navbar">Home <span class="sr-only">(current)</span></NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink class="nav-link" to="/ServicePortal"> Service portal </NavLink>
                     </li>
                    <li className="nav-item">
                       <NavLink className="nav-link" to="/WorkPortal">Worker Portal </NavLink>
                      </li>                                         
                 </ul>
                               
                  </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
              </ReactBootStrap.Navbar>
              
          </div>

<br/>
          
          <ReactBootStrap.Container>

            
          <ReactBootStrap.Row>
                                <ReactBootStrap.Col xs={12} md={8} >
                                  <h1> This project fatch Employee Api</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatem corporis. Omnis molestiae veniam porro! Reiciendis at, laboriosam illum, quia nobis hic quod mollitia enim, veniam corrupti et optio fuga!</p>


                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={6} md={4} >
                                    <a>  <img src='onlineshop.jpg' alt="Logo" class="img-responsive" height="500px" width="600px" top="10px" /> </a>
                                </ReactBootStrap.Col>

                                </ReactBootStrap.Row>


                               

          </ReactBootStrap.Container>

               <Footer/>


          <ReactBootStrap.Container>

            
          </ReactBootStrap.Container>

          </>   
    )
}

export default NavbarApi;