import React from 'react';

function TextAreaMob({line1,line2,id,show}) {

    return (
        <div className={`font-input-mono text-gray-100 text-xs text-center ${id===show ? 'opacity-100 transition-opacity duration-300 ease-in-out' : 'opacity-0 transition-opacity duration-300 ease-in-out'}`}>
            <p className='cursor-default'>{line1}</p>
            <p className="pt-2 cursor-default">{line2}</p>
        </div>
    )
}

export default TextAreaMob;