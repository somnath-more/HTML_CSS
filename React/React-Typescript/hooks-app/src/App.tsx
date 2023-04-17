import React from 'react';

import './App.css';
//import HookCounterThree from './components/HookCounterThree';
import UseEffectHookCounter from './components/UseEffectHookCounter';
// import HookCounter from './components/HookCounter';
//import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
     <h1>Hello Hooks property</h1>
     {/* <HookCounter/> */}
     {/* <HookCounterThree/> */}
     <UseEffectHookCounter/>
    </div>
  );
}

export default App;
