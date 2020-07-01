import React from "react"
const {Provider, Consumer} = React.createContext();

class ThemeContextProvider extends React.Component {
    render() {
        return (
            <Provider value={"light"}>
                {this.props.children}
            </Provider>             
        );
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer};

/* 
import AppContext from "./Practice/12-MoveContextProviderToOwnComponent/AppContext";
import {ThemeContextProvider} from "./Practice/12-MoveContextProviderToOwnComponent/themeContext";

ReactDOM.render(
    <ThemeContextProvider>
        <AppContext />
    </ThemeContextProvider>, 
    document.getElementById("root")
)
*/