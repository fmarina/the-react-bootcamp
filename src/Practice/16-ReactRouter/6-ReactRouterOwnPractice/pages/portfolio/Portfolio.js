import React from 'react';
import {Link} from 'react-router-dom';
import dataPortfolio from './dataPortfolio';

function Portfolio() {
    const listPortfolio = dataPortfolio.map(data => (
        <li key={data.id}>
            <Link to={`/portfolio/${data.id}`}>{data.name}</Link>
        </li>
    ));
    
    return (
        <div>
            <h1>Portfolio Page</h1>
            <h3><a href="https://github.com/fmarina">Mi Github</a></h3>
            <h3><a href="https://www.freecodecamp.org/">FreeCodeCamp</a></h3>
            <h3><a href="https://codepen.io/accounts/signup">CodePen</a></h3>
            <br/>
            <p>Lista de algunos de mis proyectos en react:</p>
            <br/>
            <ul>
                {listPortfolio}
            </ul>
        </div>
    );
}

export default Portfolio;