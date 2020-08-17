import React, { useState } from 'react';

const KeyboardComponent = ({ activeLetter, onClick }) => {
    const [open, setOpen] = useState(false);

    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm',
                 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'x'];
    const letterPickerHtml = abc.map(letter =>
            <button className={letter === activeLetter && 'active'}
                onClick={() => onClick(letter)}>{letter}</button>);

    return (<div className='keyboard'>
                <h1 class='hidden-if-mobile'>Explora lo Diccionari lletra a lletra</h1>
                <div
                    class='keyboard-button hidden-if-desktop'
                    onClick={() => setOpen(!open)}>
                    Mostra totes les lletres
                </div>
                <ul class={open ? "" : "hidden-if-mobile"}>{letterPickerHtml}</ul>
            </div>);
};

export default KeyboardComponent;
