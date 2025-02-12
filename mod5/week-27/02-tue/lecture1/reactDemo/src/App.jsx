// ES6
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewComponent from './NewComponent';




// const app = require("./adwd"); // ES5 SYNTAX


function App() {

  // THIS IS JSX - NOT JAVASCRIPT
  // THIS IS JSX - NOT HTML

  // - ONE PARENT
  // - comments work the same
  // - BECAUSE THIS IS NOT HTML - we dont have self closing tags anymore

  const myName = "sam";
  const newNAme = "anthony";
  const spacing = new Array(10).fill(null);

  return (
    <>
      <h1>Hello World</h1>
      {spacing.map((el) => (
        <div>
          <span>{myName}</span>
        </div>
      ))}
      <NewComponent />

    </>
  )

}

export default App
