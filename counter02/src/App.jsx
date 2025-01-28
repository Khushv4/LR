import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter]=useState(15)

  // let counter =15;

  const addValue = () => {
    
    if(counter<20){
      setCounter(counter+1)
      console.log('added')
    }
     else{
      alert('counter value should not succeed 20')
     }
  }

  const removeValue =()=>{
    if(counter>0){
      setCounter(counter-1)
      console.log('removed')
    }
    else{
      alert('value must be positive')
    }
    
  }

  return (
    <>
      <h1>React Hooks</h1>
      <p>Counter Value: {counter}</p>
      <button
      onClick={addValue}>Add Value{counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
