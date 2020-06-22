import React from 'react';
import PropTypes from 'prop-types';

function RoundedImg(props) {
    return (
        <img 
            src={props.src} 
            style={{borderRadius: props.borderRadius}} 
            className="round-img"
        />
    )
}

RoundedImg.propTypes = {
    src : PropTypes.string.isRequired,
    borderRadius : PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

RoundedImg.defaultProps = {
    borderRadius : '58%'
}

export default RoundedImg;

/* CHALLENGE:
1. The component should always receive a `src` prop, and it should always be a string
2. The component should be able to accept only a string or a number for the `borderRadius` prop
3. If it doesn't receive a `borderRadius` prop at all, it should default it to "50%"
*/