import { useState, useEffect } from 'react'
import './App.css'

function App() {

  // hooks
  // let count = 0; ---> This does NOT DYNAMICALLY RENDER ON THE PAGE
  let [count, setCount] = useState(0);
  let [secret, setSecret] = useState("");

  const increaseCount = () => {
    setCount(count+1);
  }

  useEffect(() => {
    if (count === 5) {
      setSecret("Hello World");
      console.log("hi");
    }
  }, [secret, count])


  return (
    <>
      <h1>Student Attendance Count</h1>
      <div>
        <p>{`Total Count of Students: ${count}`}</p>
        <h2>{secret}</h2>
        <button
        //  onClick={()=> increaseCount()}
          disabled={count >= 5 ? true : false}
          onClick={increaseCount}
        >Increase Count by 1</button>
      </div>
    </>
  )
}

export default App
