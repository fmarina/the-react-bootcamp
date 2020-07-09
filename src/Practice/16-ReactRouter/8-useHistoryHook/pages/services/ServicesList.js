import React from "react"
import servicesData from './servicesData';
import {Link} from 'react-router-dom';

function ServicesList() {
    const services = servicesData.map(service => (
        <li key={service._id}>
            <Link to={`/services/${service._id}`}>
                <strong>{service.name}</strong>            
            </Link>
            - ${service.price} 
        </li>
    ));

    return (
        <div>
            <h1>Services List Page</h1>
            <ul>{services}</ul>
        </div>
    )
}

export default ServicesList