import React from "react";
import {useParams, useHistory} from 'react-router-dom';
import servicesData from "./servicesData";

function ServiceDetail(props) {
    const {idService} = useParams();
    const service = servicesData.find(service => service._id === idService);

    const history = useHistory();
    const handleClick = () => {
        console.log("Submitting...");
        setTimeout(() => {
            history.push("/services");    
        }, 2000);        
        history.goBack();
    }

    return (
        <div>
            <h1>Service Detail Page</h1>
            <h2>{service.name}</h2>
            <h3>${service.price}</h3>
            <p>{service.description}</p>
            <button onClick={handleClick}>Go back to all services</button>
        </div>
    )
}

export default ServiceDetail