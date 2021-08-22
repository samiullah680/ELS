import React from 'react'
import ServicePortal from '../ServicePortal/ServiceHome';
import ShowCard from '../../Apicontainer';


import{Card } from 'react-bootstrap'

const ShowService = () => {
    return (
        <div>

            <ServicePortal/>
            <h1>show all service</h1>

           <ShowCard/>
            
        </div>
    )
}

export default ShowService
