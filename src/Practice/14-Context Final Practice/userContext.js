import React from "react"

const {Provider, Consumer} = React.createContext()

class UserContextProvider extends React.Component {
    state = {
        username : "marinaf123" 
    };

    changeUsername = (username) => {
        this.setState({username})
    }

    render() {
        const {username} = this.state
        return (
            <Provider value={{username, changeUsername : this.changeUsername}}>
                {this.props.children}
            </Provider>
        );
        
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}

/* Index.js
import AppContext from "./Practice/14-Context Final Practice/AppContext";
import {UserContextProvider} from "./Practice/14-Context Final Practice/userContext";

ReactDOM.render(
    <UserContextProvider>
        <AppContext />
    </UserContextProvider>, 
    document.getElementById("root")
)
*/