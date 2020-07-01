import React from 'react';

const UserContext = React.createContext();
export default UserContext;

/* En index.js
/*
Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
Use the static class property `contextType` on any components that need to consume context.

import UserContext from './Practice/9-ContextProviderPractice/userContext';
ReactDOM.render(
  <UserContext.Provider value={"fmarina"}>
    <App/>
  </UserContext.Provider>,
  document.getElementById('root')
);
*/