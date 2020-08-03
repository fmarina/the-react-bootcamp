import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import AppRedux from './Practice/17-Redux/2-ReduxInReact/4-Redux-Thunk/App';
import {Provider} from "react-redux"
import store from './Practice/17-Redux/2-ReduxInReact/4-Redux-Thunk/redux/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRedux />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
