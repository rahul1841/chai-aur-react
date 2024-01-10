import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15  not able to update UI

  const addValue = () => {
   // counter += 1;
   if(counter < 20){
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
       // batch banega in sabka and dekhega same kaam ho rha hai so 1 baar update hoga khali
       // do like this

    setCounter(counter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

      
    // console.log("clicked", counter);
   }
   else{
    setCounter(0)
   }
  }

  const removeValue = () => {
    if(counter > 0 ){
    setCounter(counter - 1)
    }
    else{
      setCounter(20)
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    <p>footer: {counter}</p>
 
    </>
  )
}

export default App
