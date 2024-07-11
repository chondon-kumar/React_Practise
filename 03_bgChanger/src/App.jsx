import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState('olive')

  // function changeColor (color) {
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center py-2 px-2 shadow-lg rounded-3xl gap-3 bg-amber-600' >
          <button onClick={() => setColor('red') } className='text-white bg-red-600 px-4 py-1 outline-none rounded-full shadow-lg'> Red </button>
          <button onClick={() => setColor('green') } className='text-white bg-green-500 px-4 py-1 outline-none rounded-full shadow-lg'> Green </button>
          <button onClick={() => setColor('blue') } className='text-white bg-blue-950 px-4 py-1 outline-none rounded-full shadow-lg'> Blue </button>
          <button onClick={() => setColor('orange') } className='text-white bg-orange-400 px-4 py-1 outline-none rounded-full shadow-lg'> Orenge </button>
          <button onClick={() => setColor('pink') } className='text-white bg-pink-500 px-4 py-1 outline-none rounded-full shadow-lg'> pink </button>
        </div>
      </div>
    </div>
  )
}

export default App
