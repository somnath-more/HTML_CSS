//Dom uses
// Components
// Maintainability
// scalability
// Debugging 
// reusability
// modularity
// Testing


// Atomic design: creating a system of pieces that can come together 
// to create elements and templates we can reuse over and over again.


// Atoms -> molecules->organisms->templates->pages
/*
Atoms: Atoms are the basic building blocks of a user interface. 
They are the smallest and simplest UI elements, such as buttons, icons,
 labels, and input fields. Atoms cannot be broken down any further without
  losing their functionality.

Molecules: Molecules are groups of atoms that work together to form more
complex UI elements. For example, a search bar might consist of an input 
field atom and a button atom grouped together as a molecule.
Navbar: A navbar might consist of multiple button atoms and a logo atom 
grouped together as a molecule.

function Navbar(props) {
  return (
    <nav>
      <img src={props.logoSrc} alt={props.logoAlt} />
      <ul>
        <li><button>Home</button></li>
        <li><button>About</button></li>
        <li><button>Contact</button></li>
      </ul>
    </nav>
  );
}


Organisms: Organisms are complex UI elements that are made up of molecules,
 atoms, and sometimes other organisms. They represent distinct sections of a user
  interface, such as a header, footer, or navigation menu.

Header: A header might consist of a navbar molecule, a hero molecule, 
and a search bar molecule combined together as an organism.
  
function Header(props) {
  return (
    <header>
      <Navbar logoSrc={props.logoSrc} logoAlt={props.logoAlt} />
      <Hero title={props.title} subtitle={props.subtitle} />
      <SearchBar onSearch={props.onSearch} />
    </header>
  );
}

Templates: Templates are high-level representations of how the various UI elements
 (atoms, molecules, and organisms) fit together to form a specific page layout or screen. 
 They define the overall structure of a user interface but do not contain 
 any real content.

Pages: Pages are the final output of the design process. They are the 
actual screens or pages that users interact with, and they are built using
 the templates and UI elements defined in the earlier 
 stages of the design process.*/

//Compnents in reactjs
/*When creating a React component, the component's 
name must start with an upper case letter.*/


//  Functional Components: These are simple JavaScript functions that 
//  return JSX (JavaScript XML) to define the UI. They are typically used
//   for presenting data without any internal state or side effects.

//   function Greeting(props) {
//     return <h1>Hello, {props.name}!</h1>;
//   }

//   Greeting("Somnath");

//   //Class Components

//   import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

// ReactDOM.render(<Car />, document.getElementById('root'));

// //constructor classs components
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: "red"};
//   }
//   render() {
//     return <h2>I am a {this.state.color} Car!</h2>;
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

////////Render method

////Components in Components

// Components in Files
// React is all about re-using code, and it can be smart to 
// insert some of your components in separate files.

// To do that, create a new file with a .js file extension 
// and put the code inside it:

//components using state
/*

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Car />, document.getElementById('root'));*/

//Todays goal moving forward
//Hooks and Props
/*
hooks in React:

useState: Allows you to use state in a functional component. It takes an 
initial state value and returns an array containing the current state and a
 function to update it.

useEffect: Lets you perform side effects in a functional component. It takes
 a function as an argument that will be called after every render, and can
  be used to update state, fetch data, or manipulate the DOM.

useContext: Lets you consume data from a context provider in a functional
 component. It takes a context object created by React.createContext and 
 returns the current value of the context.

useReducer: Allows you to manage complex state in a functional component.
 It takes a reducer function and an initial state value, and returns an
  array containing the current state and a dispatch function to update it.

useCallback: Memoizes a function so that it is only re-created when its 
dependencies change. This can improve performance by preventing unnecessary
 re-renders.

useMemo: Memoizes a value so that it is only re-computed
 when its dependencies change. This can also improve performance by preventing unnecessary re-renders.*/