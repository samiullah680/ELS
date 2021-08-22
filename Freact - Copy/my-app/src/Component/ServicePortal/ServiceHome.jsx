import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ServicePortal from '../ServicePortal/ServiceHome';


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
                        <NavLink class="nav-link" to="/AddService"> ADD SERVICE </NavLink>
                     </li>
                    <li className="nav-item">
                       <NavLink className="nav-link" to="/ShowService"> SHOW SERVICE </NavLink>
                      </li>

                        <li className="nav-item">
                       <NavLink className="nav-link" to="/ServiceLogin"> LOGIN SERVICE</NavLink>
                      </li> 

                        <li className="nav-item">
                       <NavLink className="nav-link" to="/ServiceRegister"> REGISTER SERVICE </NavLink>
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