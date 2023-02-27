import React from 'react';
import './App.css';
import InputLine from './components/InputLine/InputLine'

function App() {

  function addValue(title:string){
    console.log(title)
  }
  return (
    <div className="App">
      <header className="App-header">
       Hello react!
       <InputLine onCreate={addValue}/>
      </header>
      <div>
      
      </div>
    </div>
  );
}

export default App;
