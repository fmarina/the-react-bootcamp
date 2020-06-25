import React, {Component} from "react"

class Toggler extends Component {
    state = {
        on: this.props.defaultOnValue
    }

    // static defaultProps = {
    //     defaultOnValue : false
    // }
    
    toggle = () => {
        this.setState(prevState => ({ on: !prevState.on }));
    }
    
    render() {
        return (
            <div>
                {/* {this.props.render(this.state.on, this.toggle)} */}
                {/*Si pasamos varios parametros una buena practica es pasar un objeto con todos los parametros. Y en la funcion de Favorite y Menu en vez de pasar dos parametros le agregamos llaves para desestructurar un objeto 
                ({on toggle}) */}
                {this.props.render({
                    on : this.state.on,
                    toggle : this.toggle
                })}
               
            </div>
        )
    }
}

Toggler.defaultProps = {
    defaultOnValue : false
}

export default Toggler