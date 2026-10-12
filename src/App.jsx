import { useState } from "react"
function App() {
 const[counter,setCounter]=useState(15)
 const addValue=()=>{
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)
 }

 const removeValue=()=>{
  setCounter(counter-1)
 }
  return (
    <>
    <h2>counter value: {counter}</h2>
      
      <button onClick={addValue}>Add value</button>
      <br /><br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
