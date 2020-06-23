import React from 'react';
import './App.css';
// import RoundedImg from './Practice/1-DefaultProps-PropTypes'
// import AppReactChildren from './Practice/2-React Children/AppReactChildren';
import PointlessHOC from './Practice/3-HigherOrderComponent/AppHOC';

function App() {
  return (
    <div>
    {/* <RoundedImg src="https://picsum.photos/id/237/300/300" borderRadius="10px" /> */}
    {/* <AppReactChildren /> */}
    <PointlessHOC />
    </div>
  );
}

export default App;
