import { useState } from 'react'
import './Home.css'
import Line from './Line.jsx'
import staticVideo from './assets/STATIC_SCREENSAVER.mp4'

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className='w-full h-screen'>
        <video className='w-full h-full object-cover' src={staticVideo} autoPlay loop muted />
        <div className='absolute w-full h-100 top-0'>
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
      </div>
  )
}

export default App
