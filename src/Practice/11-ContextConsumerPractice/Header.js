import React from "react"
import UserContext from "./userContext"

const Header = (props) => {
    return (
        <header>
            <UserContext.Consumer>
                {username => <p>Welcome, {username}!</p>}
            </UserContext.Consumer>
        </header>
    )    
}

export default Header
