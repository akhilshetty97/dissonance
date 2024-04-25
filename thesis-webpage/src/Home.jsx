import { useState } from 'react'
import './Home.css'
import Line from './Line.jsx'
import Footer from './Footer.jsx'
import TextArea from './TextArea.jsx'
import staticVideo from './assets/STATIC_SCREENSAVER.mp4'
import adaptation from './assets/ADAPTATION.mp4'
import conflict from './assets/CONFLICT.mp4'
import consistency from './assets/CONSISTENCY.mp4'
import turmoil from './assets/TURMOIL.mp4'
import texture from './assets/Texture.png'

function App() {
  const [showTextArea, setShowTextArea] = useState(null);
 
  const handleVideoChange = (id) => {    
    // Show the video element with the corresponding id and hide others
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(video => {
      if (video.id === id) {
        video.classList.remove('hidden');
      } else {
        video.classList.add('hidden');
      }
    });
    setShowTextArea(id);
  }
  
  return (
      <div className='w-full h-screen flex flex-col justify-center items-center relative'>
        <img className='absolute w-full h-screen bg-transparent object-cover' src={texture} />
        <video id='0' className="w-full h-full object-cover transition-opacity duration-500 ease-in-out" src={staticVideo} autoPlay loop muted />
        <video id='1' className="w-full h-full object-cover transition-opacity duration-500 ease-in-out hidden" src={consistency} autoPlay loop muted />
        <video id='2' className="w-full h-full object-cover transition-opacity duration-500 ease-in-out hidden" src={conflict} autoPlay loop muted />
        <video id='3' className="w-full h-full object-cover transition-opacity duration-500 ease-in-out hidden" src={turmoil} autoPlay loop muted />
        <video id='4' className="w-full h-full object-cover transition-opacity duration-500 ease-in-out hidden" src={adaptation} autoPlay loop muted />
        <div className='absolute inset-0 flex flex-col justify-center items-center'>
          <div className='font-degular-bold text-white text-5xl text-center cursor-default absolute top-0 pt-20 2xl:pt-28'>DISSONANCE</div> 
          <div className='flex items-center pt-8 2xl:pt-12'> 
            <div className='flex-col items-center px-12 2xl:px-40' onMouseEnter={() => handleVideoChange('1')} onMouseLeave={() => setShowTextArea(false)}>
              <p className={`text-white text-sm text-center ${showTextArea==='1' ? 'font-input-mono-bold cursor-default':'font-input-mono'}`}>CONSISTENCY</p>
              <TextArea line1={`//a low hum;`} line2={`An initial sense of <br/>order and equilibrium <br/>establishes a mental <br/> comfort zone.`} id={'1'} show={showTextArea}/>
            </div>
            <Line/>
            <div className='flex-col items-center px-12 2xl:px-40' onMouseEnter={() => handleVideoChange('2')} onMouseLeave={() => setShowTextArea(false)}>
              <p className={`text-white text-sm text-center ${showTextArea==='2' ? 'font-input-mono-bold cursor-default':'font-input-mono'}`}>CONFLICT</p>
              <TextArea line1={`//the crescendo`} line2={`Jarring contradictory<br/>stimuli intrude, <br/>generating profound<br/>tension and unease.`} id={'2'} show={showTextArea}/>
            </div>
            <Line/>
            <div className='flex-col items-center px-12 2xl:px-40' onMouseEnter={() => handleVideoChange('3')} onMouseLeave={() => setShowTextArea(false)}>
              <p className={`text-white text-sm text-center ${showTextArea==='3' ? 'font-input-mono-bold cursor-default':'font-input-mono'}`}>TURMOIL</p>
              <TextArea line1={`//the unraveling`} line2={`Opposing perspectives<br/>intensify into<br/>sensory overload and<br/>mental chaos.`} id={'3'} show={showTextArea}/>
            </div>
            <Line/>
            <div className='flex-col items-center px-12 2xl:px-40' onMouseEnter={() => handleVideoChange('4')} onMouseLeave={() => setShowTextArea(false)}>
              <p className={`text-white text-sm text-center ${showTextArea==='4' ? 'font-input-mono-bold cursor-default':'font-input-mono'}`}>ADAPTATION</p>
              <TextArea line1={`//reconciliation;`} line2={`A fragile resolution<br/>emerges from the<br/>upheaval, allowing new<br/>synthesis to take shape.`} id={'4'} show={showTextArea}/>
            </div>
          </div> 
          <Footer text={'HOVER TO ILLUMINATE THE DANCE OF THE MIND, UNRAVELING THE MYSTERIES OF THE HUMAN PSYCHE, ONE PHASE AT A TIME.'}/>
        </div>
      </div>
  )
}

export default App;

