import React from 'react';

const ThemeContext = React.createContext();
// const {Provider, Consumer} = ThemeContext
// ThemeContext.Provider & ThemeContext.Consumer
export default ThemeContext;

/* En index.js:
import ThemeContext from './Practice/8-ContextProvider/themeContext';
ReactDOM.render(
  <ThemeContext.Provider value={"light"}>
    <App/>
  </ThemeContext.Provider>,
  document.getElementById('root')
);
*/
