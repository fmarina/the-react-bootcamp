import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    console.log(props);

    const styles = {
        backgroundColor: props.cardColor,
        width: props.width,
        height: props.height
    }

    return (
        <div style={styles}></div>
    );
}
// Definimos Default Props para Card en caso que no le pasemos las propiedad que espera
Card.defaultProps = {
    height : 100
}

/* Challenge: Add prop types for the height and width. Make at least one of them required.
Extra Challenge: Make it so your incoming cardColor is only valid if it is "blue" or "red" y a su vez que tambien sea required*/

Card.propTypes = {
    height : PropTypes.number,
    width : PropTypes.number.isRequired,    
    cardColor : PropTypes.oneOf(["blue", "red"]).isRequired
}
  
export default Card;