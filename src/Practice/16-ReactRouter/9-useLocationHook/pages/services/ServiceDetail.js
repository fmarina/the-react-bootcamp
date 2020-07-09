import React from "react";
import {useParams} from 'react-router-dom';
import servicesData from "./servicesData";

function ServiceDetail(props) {
    const {idService} = useParams();
    const thisService = servicesData.find(service => service._id === idService);

    return (
        <div>
            <h1>Service Detail Page</h1>
            <h2>{thisService.name}</h2>
            <h3>${thisService.price}</h3>
            <p>{thisService.description}</p>
        </div>
    )
}

export default ServiceDetail