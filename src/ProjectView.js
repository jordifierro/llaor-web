import React from 'react';

import Word from 'dictionary/entities/Word';
import Meaning from 'dictionary/entities/Meaning';
import WordComponent from 'dictionary/components/WordComponent';

class ProjectView extends React.Component {

    render = () => {
        return (
            <div>
                <WordComponent word={new Word("Llaor", [new Meaning("", "", "Llavor", [], [])])} />
                <div>
                    <p>
                        Benviguts al projecte Llaor!
                    </p>
                    <p>
                        Lo nostre objectiu è la digitalizació i divulgació de la llengua i cultura pallaresa,
                        que actualment se troben en perill d'extinció.
                    </p>
                    <p>
                        Ham empeçat pela secció de la llengua, que contí un diccionari de mots originaris de çò nostre.
                        Esperem que sigue la llaor...
                    </p>
                </div>
            </div>
        )
    };
};

export default ProjectView;
