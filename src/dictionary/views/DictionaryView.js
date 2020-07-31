import React from 'react';
import { Link } from 'react-router-dom';

class DictionaryView extends React.Component {

    render = () => {
        return (
            <div className='content-box'>
                <div>
                    <p>
                        En aguesta secció podreu trobar una bona recossira de mots en pallarés.
                        Podeu anar lletra per lletra o bé cercar per text. A disfrutar!
                    </p>
                </div>
                <div> 
                    <Link to="/diccionari/lletres">
                        <button type="button">
                            ABCedari
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/diccionari/cerca">
                        <button type="button">
                            Cerca
                        </button>
                    </Link>
                </div>
                <div>
                    <p>
                        Un profund agraïment pela feina feta as autors des llibres
                        "El parlar del Pallars" (Pep Coll)
                        i "Aïna" (Rosa Ramoneda, Rosa M. Anglada, Elena Fo, Assumpta Gelats,
                        Ester Isus, Carme Jové, Anna Mestre, Pilar Mur i Gemma Orteu),
                        des quals s'han extret les definicions.
                        Donar les gràcies tamé a aguells pallaresos que han
                        col·laborat en la recollida d'aguets mots i
                        a tots es que a dia d'avui (i malgrat les dificultats) encara les mantinen vius.
                    </p>
                </div>
            </div>
        )
    };
};

export default DictionaryView;
