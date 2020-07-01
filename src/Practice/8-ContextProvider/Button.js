import React, {Component} from "react"
import ThemeContext from "./themeContext"

class Button extends Component {
    render() {
        //El valor de this.context va a ser el valor que le pasemos a Provider
        console.log(this.context);
        return (
            <button className={`${this.context}-theme`}>Switch Theme</button>
        )    
    }
}

Button.contextType = ThemeContext;

export default Button