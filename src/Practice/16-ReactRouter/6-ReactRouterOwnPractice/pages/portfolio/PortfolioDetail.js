import React from 'react';
import {useParams} from 'react-router-dom';
import dataPortfolio from './dataPortfolio';

function PortfolioDetail(props) {
    const {id} = useParams();
    const projects = dataPortfolio.find(project =>  project.id === id);
    
    return (
        <div>
            <h1>{projects.name}</h1>
            <h3>{projects.description}</h3>
            <a href={projects.url}>{projects.url}</a>
        </div>
    );
}

export default PortfolioDetail;