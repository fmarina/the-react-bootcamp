import React from "react"
import {withFavoriteNumber} from './withFavoriteNumber';

function App(props) {
    console.log(props);
    return (
        <div>My Favorite number is {props.favNum}</div>
    )
}
export default withFavoriteNumber(App);

// Cuando yo envuelvo App Component con withFavoriteNumber no estoy exportando mi App component, si no que estoy exportando cualquier cosa que retorne lo que withFavoriteNumber este llamando.