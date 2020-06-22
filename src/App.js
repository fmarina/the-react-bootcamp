import React from 'react';
import './App.css';
import Card from './DefaultProps';

function App() {
  return (
    <div>
      <Card cardColor="red"/>
      <Card width={200}/>
      <Card cardColor="green"/>
    </div>
  );
}

export default App;
