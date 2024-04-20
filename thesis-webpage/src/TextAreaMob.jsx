import React from 'react';

function TextAreaMob({line1,line2,id,show}) {

    return (
        <div className={`font-input-mono text-gray-100 text-xs text-center ${id===show ? 'show' : 'hidden'}`}>
            <p className='cursor-default'>{line1}</p>
            <p className="pt-2 cursor-default" dangerouslySetInnerHTML={{ __html: line2 }}></p>
        </div>
    )
}

export default TextAreaMob;