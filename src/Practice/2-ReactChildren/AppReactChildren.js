import React from 'react';
import './ReactChild.css'
import Callout from './Callout';

const App = () => {
    return (
        <main>
            <h1>Welcome!</h1>
{/* En lugar de tener tres instancias distintas de callout: InfoCallout, ImageCallout, EmailCallout hacemos lo siguiente:*/}
            <Callout>
                <h2>Don't miss out!</h2>
                <p>Unless you don't suffer from FOMO, you better make sure you fill out the email form below!</p>
            </Callout>

            <Callout>
                <img src="https://picsum.photos/id/102/4320/3240" width="100%" />
                <figcaption>Just look at those sparkling raspberries!</figcaption>
            </Callout>

            <Callout>
                <h2>Give us your email. We definitely won't sell it to anyone</h2>
                <input type="email" placeholder="Enter Email"/>
                <button>Sign me up!</button>
            </Callout>
        </main>
    );
}

export default App;