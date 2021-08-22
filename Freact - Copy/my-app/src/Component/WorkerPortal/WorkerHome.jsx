import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import AddApi from "../../AddApi"


import DisplayAllApi from "../../DisplayAllApi"
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
                <ReactBootStrap.Navbar.Brand href="#home"> Employment Life Solution(ELS) </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                  <ReactBootStrap.Nav className="mr-auto">

                  <Link to="/features">
                  <ReactBootStrap.Nav.Link href="/navbar"> Employee Data</ReactBootStrap.Nav.Link>
                  </Link>

             
                  </ReactBootStrap.Nav>

                  <ReactBootStrap.Nav>
                   <ul className="navbar-nav ml-auto">
                     <li className="nav-item active">
                       <NavLink class="nav-link" to="/navbar">Home <span class="sr-only">(current)</span></NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink class="nav-link" to="/WorkerLogin">LOGIN WORKER </NavLink>
                     </li>
                    <li className="nav-item">
                       <NavLink className="nav-link" to="/WorkerRegister"> REGISTER WORKER </NavLink>
                      </li>    

                      <li className="nav-item">
                       <NavLink className="nav-link" to="/WorkShow"> SHOW ALL WORK </NavLink>
                      </li>  

                                                         
                 </ul>
                               
                  </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
              </ReactBootStrap.Navbar>
              
          </div>

<br/>
          
        



          </>   
    )
}

export default NavbarApi;