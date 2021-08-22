import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './sami.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import DisplayAllApi from "./DisplayAllApi"

import NavbarApi from "./Component/NavbarApi"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import apidata from "./DAPI"
import reportWebVitals from './reportWebVitals';

import ServicePortal from './Component/ServicePortal/ServiceHome';
import ServiceLogin from './Component/ServicePortal/SLogin';
import ServiceRegister from './Component/ServicePortal/SRegister';
import AddService from './Component/ServicePortal/AddService';
import ShowService from './Component/ServicePortal/ShowService';


import WorkPortal from './Component/WorkerPortal/WorkerHome';
import WorkerLogin from './Component/WorkerPortal/WLogin';
import WorkRegister from './Component/WorkerPortal/WRegister';
import WorkShow from './Component/WorkerPortal/WorkShow';









import {ResponsiveEmbed,Table,Card,Media, Container,Nav, NavDropdown, Navbar,Col,Row, Form, FormControl,Button} from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>

    
      <BrowserRouter>
        <main>
            <Switch>
                <Route exact path="/" component={NavbarApi}  />
                <Route exact path="/navbar" component={NavbarApi} />
                <Route exact path="/display" component={DisplayAllApi} />


                <Route exact path="/ServicePortal" component={ServicePortal} />
                <Route exact path="/ServiceLogin" component={ServiceLogin} />
                <Route exact path="/ServiceRegister" component={ServiceRegister} />
                <Route exact path="/AddService" component={AddService} />
                <Route exact path="/ShowService" component={ShowService} />


                <Route exact path="/WorkPortal" component={WorkPortal} />
                <Route exact path="/WorkerLogin" component={WorkerLogin} />
                <Route exact path="/WorkerRegister" component={WorkRegister} />
                <Route exact path="/WorkShow" component={WorkShow} />

                <Route component={Error} />
            </Switch>
        </main>
                 
    </BrowserRouter>
    

    
  </React.StrictMode>,



  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
