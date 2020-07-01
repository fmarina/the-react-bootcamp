import React from 'react';

const UserContext = React.createContext();
export default UserContext;

/* En index.js
import UserContext from './Practice/9-ContextProviderPractice/userContext';
ReactDOM.render(
  <UserContext.Provider value={"fmarina"}>
    <App/>
  </UserContext.Provider>,
  document.getElementById('root')
);
*/