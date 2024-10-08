import { useState } from 'react'
import FooterMob from './FooterMob.jsx'
import TextAreaMob from './TextAreaMob.jsx'
import staticImg1 from './assets/mobile/staticImg1.png'
import adaptation1 from './assets/mobile/adaptation1.png'
import conflict1 from './assets/mobile/conflict1.png'
import consistency1 from './assets/mobile/consistency1.png'
import turmoil1 from './assets/mobile/turmoil1.png'
import texture1 from './assets/Texture.png'

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
            <img className='overlay object-cover' src={texture1} style={{position: 'absolute',top:0,left:0,width:'100%',height:'100vh',backgroundColor: 'rgba(0, 0, 0, 0.5)',zIndex: 0}}/>
            <img id='0' className="bgImg w-full h-screen object-cover transition-opacity duration-500 ease-in-out" src={staticImg1}/>
            <img id='1' className="bgImg w-full h-screen object-cover transition-opacity duration-500 ease-in-out hidden" src={consistency1}/>
            <img id='2' className="bgImg w-full h-screen object-cover transition-opacity duration-500 ease-in-out hidden" src={conflict1}/>
            <img id='3' className="bgImg w-full h-screen object-cover transition-opacity duration-500 ease-in-out hidden" src={turmoil1}/>
            <img id='4' className="bgImg w-full h-screen object-cover transition-opacity duration-500 ease-in-out hidden" src={adaptation1}/>
            <div className='absolute w-full h-screen top-0'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='font-degular-bold text-4xl text-center' style={{paddingTop:'2.5rem', color: '#F1F1F1'}}>DISSONANCE</div> 
                    <FooterMob text={'CLICK TO ILLUMINATE THE DANCE OF THE MIND, UNRAVELING THE MYSTERIES OF THE HUMAN PSYCHE, ONE PHASE AT A TIME.'}/>
                    <div className='phases flex-col' style={{paddingTop:'6rem'}}>
                        <div className='flex-col' onClick={() => handleImageChange('1')} >
                            <p className={`text-white text-xs text-center ${showTextArea==='1' ? 'font-input-mono-bold cursor-default':'font-input-mono'}`}>CONSISTENCY</p>
                            <TextAreaMob line1={`//a low hum;`} line2={`An initial sense of <br/>order and equilibrium <br/>establishes a mental <br/> comfort zone.`} id={'1'} show={showTextArea}/>
                        </div>
                        <div className='flex-col pt-10' onClick={() => handleImageChange('2')} >
                            <p className={`text-white text-xs text-center ${showTextArea==='2' ? 'font-input-mono-bold cursor-default':'font-input-mono'}`}>CONFLICT</p>
                            <TextAreaMob line1={`//the crescendo`} line2={`Jarring contradictory<br/>stimuli intrude, <br/>generating profound<br/>tension and unease.`} id={'2'} show={showTextArea}/>
                        </div>
                        <div className='flex-col pt-10' onClick={() => handleImageChange('3')} >
                            <p className={`text-white text-xs text-center ${showTextArea==='3' ? 'font-input-mono-bold cursor-default':'font-input-mono'}`}>TURMOIL</p>
                            <TextAreaMob line1={`//the unraveling`} line2={`Opposing perspectives<br/>intensify into<br/>sensory overload and<br/>mental chaos.`} id={'3'} show={showTextArea}/>
                        </div>
                        <div className='flex-col pt-10' onClick={() => handleImageChange('4')} >
                            <p className={`text-white text-xs text-center ${showTextArea==='4' ? 'font-input-mono-bold cursor-default':'font-input-mono'}`}>ADAPTATION</p>
                            <TextAreaMob line1={`//reconciliation;`} line2={`A fragile resolution<br/>emerges from the<br/>upheaval, allowing new<br/>synthesis to take shape.`} id={'4'} show={showTextArea}/>
                        </div>
                    </div>
                    <a href="https://shreyatalegaonkar.com" className='text-xs text-center font-input-mono-bold' style={{position:'absolute', bottom:'10rem', color: '#F1F1F1'}}>shreyatalegaonkar.com</a>
                </div>
            </div>
        </div>
    )
}

export default MobHome;