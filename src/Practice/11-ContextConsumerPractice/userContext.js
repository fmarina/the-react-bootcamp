import React from "react"

const UserContext = React.createContext()
export default UserContext

/* Challenge:
 1. Convert App and Header back into functional components
 2. Use UserContext.Consumer to consume the username context in both places

import AppContext from './Practice/11-ContextConsumerPractice/AppConsumer';
import UserContext from './Practice/11-ContextConsumerPractice/userContext';

ReactDOM.render(
    <UserContext.Provider value={"fmarina123"}>
        <AppContext />
    </UserContext.Provider>, 
    document.getElementById("root")
)

*/