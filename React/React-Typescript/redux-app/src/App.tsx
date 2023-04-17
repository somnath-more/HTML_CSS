import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import UsersContainer from './components/UsersContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Counter />
        {/* <UsersContainer />  */}
        {/* <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> */}
      
      </header>
    </div>
  );
}

export default App;
