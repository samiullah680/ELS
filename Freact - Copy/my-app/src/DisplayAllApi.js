import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './DisplayAllApi';
import { BrowserRouter, Route, Switch,NavLink  } from 'react-router-dom';


import {Provider} from 'react-redux'
 
import store from './Store'

import Apicontainer from './Apicontainer'

import NavBar from "./Component/NavBar"

import apidata from "./DAPI"
import reportWebVitals from './reportWebVitals';
import {ResponsiveEmbed,Table,Card,Media, Container,Nav, NavDropdown, Navbar,Col,Row, Form, FormControl,Button} from 'react-bootstrap';


function apiData(val){

    return(

    
      
      
        <Container >
                <Apicontainer 
                profile_image={val.profile_image}
                id={val.id}
                employee_name={val.employee_name}
                employee_age={val.employee_age}
                />
      </Container>   

      
    )
  }

function DisplayAllApi(){



  
return(
    <React.StrictMode>

<NavBar/>
      
          

<Provider store={store}>
         <Apicontainer/>
</Provider>
                
      
  
     
    </React.StrictMode>
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

export default DisplayAllApi