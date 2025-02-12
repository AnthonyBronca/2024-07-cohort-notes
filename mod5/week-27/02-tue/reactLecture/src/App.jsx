import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewComponent from './NewComponent';

// ES6 IMPORTS


function App() {


  // JSX - comments are the same
  // ONE PARENT
  // JSX - Allows us to use JAVASCRIPT and inject directly
  const myName = "Anthony";


  // JSX - > REQUIRES ARRAYS TO LOOP
  // const spacing = [null, null,null]
  const spacing = new Array(50).fill(null);

  return (
    <>
      <h1>hello world</h1>

      {spacing.map(el => (
        <div>
          <p>{myName}</p>
        </div>
      ))}
      <NewComponent />
    </>
  )
}

export default App
