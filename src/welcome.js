import React from 'react';
import { Link } from 'react-router-dom';

class WelcomeView extends React.Component {

    render = () => {
        return (
            <div className='content-box'>
                <div>
                    <p>
                        Benviguts al projecte Llaor!
                    </p>
                    <p>
                        Lo nostre objectiu è la digitalizació i divulgació de la llengua i cultura pallaresa,
                        que actualment se troben en perill d'extinció.
                    </p>
                    <p>
                        Ham empeçat pela creació d'un diccionari de mots originaris de çò nostre.
                        Esperem que sigue la llaor...
                    </p>
                </div>
                <div> 
                    <Link to="/diccionari">
                        <button type="button">
                            Diccionari
                        </button>
                    </Link>
                </div>
            </div>
        )
    };
};

export default WelcomeView;
