import React from 'react';

class AboutView extends React.Component {

    render = () => {
        return (
            <div className='content-box'>
                <div>
                    <p>
                        Un profund agraïment pela feina feta as autors des llibres
                        "El parlar del Pallars" (Pep Coll)
                        i "Aïna" (Rosa Ramoneda, Rosa M. Anglada, Elena Fo, Assumpta Gelats,
                        Ester Isus, Carme Jové, Anna Mestre, Pilar Mur i Gemma Orteu),
                        des quals s'han extret les definicions.
                    </p>
                    <br />
                    <p>
                        Donar les gràcies tamé a aguells pallaresos que han
                        col·laborat en la recollida d'aguets mots i
                        a tots es que a dia d'avui (i malgrat les dificultats) encara les mantinen vius.
                    </p>
                    <br />
                    <p>
                        Lo portal fot goi de vere gràcies al nostre mestre del disseny: Max Castellarnau.
                    </p>
                </div>
            </div>
        )
    };
};

export default AboutView;
