import { useState } from 'react'
import Footer from './Footer.jsx'
import TextArea from './TextArea.jsx'
import staticImg from './assets/mobile/staticImg.png'
import adaptation from './assets/mobile/adaptation.png'
import conflict from './assets/mobile/conflict.png'
import consistency from './assets/mobile/consistency.png'
import turmoil from './assets/mobile/turmoil.png'
import texture from './assets/Texture.png'

function MobHome() {
    const [showTextArea, setShowTextArea] = useState(null);
 
    const handleImageChange = (id) => {    
      const imageElements = document.querySelectorAll('.bgImg');
      imageElements.forEach(image => {
        if (image.id === id) {
            image.classList.remove('hidden');
        } else {
            image.classList.add('hidden');
        }
      });
      setShowTextArea(id);
    }

    return (
        <div className='w-full h-screen'>
            <img className='overlay object-cover' src={texture} style={{position: 'absolute',top:0,left:0,width:'100%',height:'100vh',backgroundColor: 'rgba(0, 0, 0, 0.5)',zIndex: 0}}/>
            <img id='0' className="bgImg w-full h-screen object-cover transition-opacity duration-500 ease-in-out" src={staticImg} autoPlay loop muted />
            <img id='1' className="bgImg w-full h-screen object-cover transition-opacity duration-500 ease-in-out hidden" src={consistency} autoPlay loop muted />
            <img id='2' className="bgImg w-full h-screen object-cover transition-opacity duration-500 ease-in-out hidden" src={conflict} autoPlay loop muted />
            <img id='3' className="bgImg w-full h-screen object-cover transition-opacity duration-500 ease-in-out hidden" src={turmoil} autoPlay loop muted />
            <img id='4' className="bgImg w-full h-screen object-cover transition-opacity duration-500 ease-in-out hidden" src={adaptation} autoPlay loop muted />
            <div className='absolute w-full h-screen top-0'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='font-degular-bold text-white text-4xl text-center' style={{paddingTop:'2.5rem'}}>DISSONANCE</div> 
                    <Footer text={'CLICK TO ILLUMINATE THE DANCE OF THE MIND, UNRAVELING THE MYSTERIES OF THE HUMAN PSYCHE, ONE PHASE AT A TIME.'}/>
                    <div className='phases flex-col' style={{paddingTop:'6rem'}}>
                        <div className='flex-col' onClick={() => handleImageChange('1')} >
                            <p className={`text-white text-xs text-center ${showTextArea==='1' ? 'font-input-mono-bold cursor-default':'font-input-mono'}`}>CONSISTENCY</p>
                            <TextArea line1={`//a low hum;`} line2={`An initial sense of <br/>order and equilibrium <br/>establishes a mental <br/> comfort zone.`} id={'1'} show={showTextArea}/>
                        </div>
                        <div className='flex-col pt-10' onClick={() => handleImageChange('2')} >
                            <p className={`text-white text-xs text-center ${showTextArea==='2' ? 'font-input-mono-bold cursor-default':'font-input-mono'}`}>CONFLICT</p>
                            <TextArea line1={`//the crescendo`} line2={`Jarring contradictory<br/>stimuli intrude, <br/>generating profound<br/>tension and unease.`} id={'2'} show={showTextArea}/>
                        </div>
                        <div className='flex-col pt-10' onClick={() => handleImageChange('3')} >
                            <p className={`text-white text-xs text-center ${showTextArea==='3' ? 'font-input-mono-bold cursor-default':'font-input-mono'}`}>TURMOIL</p>
                            <TextArea line1={`//the unraveling`} line2={`Opposing perspectives<br/>intensify into<br/>sensory overload and<br/>mental chaos.`} id={'3'} show={showTextArea}/>
                        </div>
                        <div className='flex-col pt-10' onClick={() => handleImageChange('4')} >
                            <p className={`text-white text-xs text-center ${showTextArea==='4' ? 'font-input-mono-bold cursor-default':'font-input-mono'}`}>ADAPTATION</p>
                            <TextArea line1={`//reconciliation;`} line2={`A fragile resolution<br/>emerges from the<br/>upheaval, allowing new<br/>synthesis to take shape.`} id={'4'} show={showTextArea}/>
                        </div>
                    </div>
                </div>
                <p className='text-white text-xs text-center font-input-mono ' style={{ position: 'absolute', bottom: '8rem', width: '100%' }}>SHREYA TALEGAONKAR</p>
            </div>
        </div>
    )
}

export default MobHome;