import React from 'react';
import './TextArea.css'

function TextArea({line1,line2,id,show}) {

    return (
        <div className={`font-input-mono text-white text-xs text-center ${id===show ? 'show' : 'hidden'}`}>
            <p>{line1}</p>
            <p className="pt-2" dangerouslySetInnerHTML={{ __html: line2 }}></p>
        </div>
    )
}

export default TextArea;