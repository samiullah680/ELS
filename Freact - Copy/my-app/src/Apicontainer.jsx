import react from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import "./App.css"
import reactDom from "react-dom";
import Api from './DAPI'
import {ResponsiveEmbed,Table,Card,Media, Container,Nav, NavLink,NavDropdown, Navbar, Form, FormControl,Button} from 'react-bootstrap';
import { Row ,Col} from "react-bootstrap";



  function fatchapi( contacts){

        return(

                <>


                                <div className="container">

                                <Card style={{ width: '16rem',  } }>
                                <Card.Body>
                                <Card.Img variant="top" src={contacts.profile_image} />

                                <Card.Title> User detail </Card.Title>


                                <Card.Title> {contacts.id} : Username : {contacts.employee_name} </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                Name:  {contacts.employee_name}
                                salary: {contacts.employee_salary} Age: {contacts.employee_age}
                                </Card.Text>
                                <Card.Link href="#"> Update data</Card.Link>
                                <Card.Link href="#"> Delete data </Card.Link>
                                </Card.Body>
                                </Card>




                </div>  



                  
  </>


        )
    
       

  }


function Apicontainer (){



        return(
        <>

                <div className="container fluid"   >
                        {

                                 Api.map(fatchapi)

                        }

                 </div>

        </>



        );

}

export default Apicontainer