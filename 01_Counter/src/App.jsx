import { useState } from 'react'

function App() {
  
  // let counter = 10;

  // let addValue = () => {
  // counter = counter + 1;
  //   console.log( counter);
  // }
  const [counter, setCounter] = useState(0) // this frist parameter is variable and sceond parameter is a funtion
  
    const addValue = () => {
      setCounter  ((count) => count + 1 )
      // setCounter  ((count) => count + 1 ) 
    }

    const removeValue = () => {
      setCounter (counter - 1)
    }

  return ( 
  <>

    <h1> My Practise Course With Hitesh</h1>
    <h3>Counter Value: {counter} </h3>
    <button onClick={addValue} >Add Value</button> {''}
    <button onClick={removeValue} >Remove Value</button>
    <h4>Footer: {counter} </h4>
    </>
  )
}

export default App
