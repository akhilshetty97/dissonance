import { useState } from 'react'
import './Home.css'
import Line from './Line.jsx'
import TextArea from './TextArea.jsx'
import staticVideo from './assets/STATIC_SCREENSAVER.mp4'
import adaptation from './assets/ADAPTATION.mp4'
import conflict from './assets/CONFLICT.mp4'
import consistency from './assets/CONSISTENCY.mp4'
import turmoil from './assets/TURMOIL.mp4'

function App() {
  const [vid, setVid] = useState(staticVideo);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showTextArea, setShowTextArea] = useState(null);

  const handleVideoChange = (newSrc, id) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setVid(newSrc);
      setIsTransitioning(false);
    }, 200);
    setShowTextArea(id);
  }
  
  return (
      <div className='w-full h-screen'>
        <video className={`w-full h-full object-cover ${isTransitioning ? 'fade-out' : 'fade-in'}`} src={vid} autoPlay loop muted />
        <div className='absolute w-full h-100 top-0'>
          <div className='font-degular-bold text-white text-4xl pt-20 text-center'>DISSONANCE</div> 
          <div className='flex justify-around items-center' style={{ paddingTop: '100px' }}>
            <div className='flex-col items-center' onMouseEnter={() => handleVideoChange(consistency, '1')} onMouseLeave={() => setShowTextArea(false)}>
              <p className='font-input-mono text-white text-xs text-center' >CONSISTENCY</p>
              <TextArea line1={`//a low hum;`} line2={`An initial sense of <br/>order and equilibrium <br/>establishes a mental <br/> comfort zone.`} id={'1'} show={showTextArea}/>
            </div>
            <Line/>
            <div className='flex-col items-center' onMouseEnter={() => handleVideoChange(conflict, '2')} onMouseLeave={() => setShowTextArea(false)}>
              <p className='font-input-mono text-white text-xs text-center'>CONFLICT</p>
              <TextArea line1={`//the crescendo`} line2={`Jarring contradictory<br/>stimuli intrude, <br/>generating profound<br/>tension and unease.`} id={'2'} show={showTextArea}/>
            </div>
            <Line/>
            <div className='flex-col items-center' onMouseEnter={() => handleVideoChange(turmoil, '3')} onMouseLeave={() => setShowTextArea(false)}>
              <p className='font-input-mono text-white text-xs text-center'>TURMOIL</p>
              <TextArea line1={`//the unraveling`} line2={`Opposing perspectives<br/>intensify into<br/>sensory overload and<br/>mental chaos.`} id={'3'} show={showTextArea}/>
            </div>
            <Line/>
            <div className='flex-col items-center' onMouseEnter={() => handleVideoChange(adaptation, '4')} onMouseLeave={() => setShowTextArea(false)}>
              <p className='font-input-mono text-white text-xs text-center'>ADAPTATION</p>
              <TextArea line1={`//reconciliation;`} line2={`A fragile resolution<br/>emerges from the<br/>upheaval, allowing new<br/>synthesis to take shape.`} id={'4'} show={showTextArea}/>
            </div>
          </div> 
        </div>
      </div>
  )
}

export default App
