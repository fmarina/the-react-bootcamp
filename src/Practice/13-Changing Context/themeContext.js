import React, {Component} from "react";
const {Provider, Consumer} = React.createContext()

/* Challenge:
  1) Add state to hold the current theme
  2) Add a method for flipping the state between light and dark
*/

class ThemeContextProvider extends Component {
    state = {
        theme : "light"
    }

    toggleTheme = () => {
        this.setState(prevState => {
            return { theme: prevState.theme === "light" ? "dark" : "light"}
        });

    }

    render() {       
        return (
            <Provider value={{ theme : this.state.theme, toggleTheme : this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}

/*
import AppContext from './Practice/13-Changing Context/AppContext';
import {ThemeContextProvider} from "./Practice/13-Changing Context/themeContext";

ReactDOM.render(
    <ThemeContextProvider>
        <AppContext />
    </ThemeContextProvider>, 
    document.getElementById("root")
)
*/