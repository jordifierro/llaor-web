import React from 'react';
import { Link } from 'react-router-dom';

class DictionaryView extends React.Component {

    render = () => {
        return (
            <div className='content-box'>
                <div>
                    <p>
                        En aguesta secció podreu trobar una bona recossira de mots en pallarés.
                        Podeu anar lletra per lletra o bé cercar per text. A esbarriar!
                    </p>
                </div>
                <div> 
                    <Link to="/llengua/diccionari/lletres">
                        <button type="button">
                            ABCedari
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/llengua/diccionari/cerca">
                        <button type="button">
                            Cerca
                        </button>
                    </Link>
                </div>
            </div>
        )
    };
};

export default DictionaryView;
