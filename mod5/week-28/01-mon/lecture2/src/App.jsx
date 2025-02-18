import { useState, useEffect } from 'react'
import './App.css'

function App() {


  // hooks
  let [count, setCount] = useState(0);
  let [secret, setSecret] = useState("")

  // let count = 0;

  const increaseCount = () => {
    console.log("count -> ", count);
    setCount(count + 1);
    console.log("count -> ", count);
  }


  // useEffect -> is a hook
  useEffect(() => {
    if (count === 5) {
      console.log("hi");
      setSecret("Hello World :D")
    }
  }, [secret, count])



  return (
    <>
    <h1>Total Students in Attendance</h1>
    <div>
      <h2>{`Count of student present: ${count} `}</h2>
      <h3>{secret}</h3>
      <button
      disabled={count >= 5 ? true: false}
      onClick={()=> increaseCount()}
      // onClick={increaseCount}
      >Increase Student Count by 1</button>
    </div>
    </>
  )
}

export default App
