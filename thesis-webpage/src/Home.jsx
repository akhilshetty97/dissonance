import { useState } from 'react'
import './Home.css'
import Line from './Line.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className='bg-black w-full h-screen'>
          <div className='font-degular-bold text-white text-4xl pt-20 text-center'>DISSONANCE</div> 
          <div className='flex justify-around items-center' style={{ paddingTop: '100px' }}>
            <p className='font-input-mono text-white text-xs'>CONSISTENCY</p>
            <Line/>
            <p className='font-input-mono text-white text-xs'>CONFLICT</p>
            <Line/>
            <p className='font-input-mono text-white text-xs'>TURMOIL</p>
            <Line/>
            <p className='font-input-mono text-white text-xs'>ADAPTATION</p>
          </div> 
      </div>
  )
}

export default App
