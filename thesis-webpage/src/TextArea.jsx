import React from 'react';

function TextArea({line1,line2,id,show}) {

    return (
        <div className={`font-input-mono text-gray-100 text-xs text-center ${id===show ? 'show ease-in-out md:opacity-100 transition-opacity duration-300 ease-in-out' : 'hidden ease-in-out md:opacity-0 transition-opacity duration-300 ease-in-out'}`}>
            <p className='cursor-default'>{line1}</p>
            <p className="pt-2 cursor-default" dangerouslySetInnerHTML={{ __html: line2 }}></p>
        </div>
    )
}

export default TextArea;