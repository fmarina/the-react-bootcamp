import React from 'react';

class Toggler extends React.Component {
    state = {
        on : false
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        });
    }

    render() {
        const Component = this.props.component;
        return (
            <Component on={this.state.on} toggle={this.toggle} {...this.props}/>
        );
    }
}

export const withToggler = (component) => {
    return (props) => {
        return (
            <Toggler component={component} {...props}/> 
            //pasar el componente que viene por parametro y asegurarnos de que cualquier props que pasemos en este componente la pasemos aqui.
        );
    }
}

// En Favorite importamos withToggler. withToggler es una funcion que toma un componente y retorna un nuevo componente. Ese componente esta envolviendo Toggler component a quien le paso mi componente dado por parametro y en Toggler Component tiene un state, un metodo toggle y este en render retorna finalmente el componente que originalmente le pase por parametro a withToggler function.

// it what from Favorite.js withToggler called component pass down to the Toggler
// <Toggler component={component} {...props}/> 
// and then the Toggler Component finally render it.
// <Component on={this.state.on} toggle={this.toggle} {...this.props}/>