import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import WordComponent from 'dictionary/components/WordComponent';
import LoaderComponent from 'commons/components/loader/LoaderComponent';
import KeyboardComponent from 'commons/components/keyboard/KeyboardComponent';
import { store } from 'dictionary/views/store';

const LettersView = props => {

    const [showPicker, setShowPicker] = useState(false);
    const { lettersState, dispatch } = useContext(store);
    const letter = props.match.params.letter;

    useEffect(() => {
        if (letter !== lettersState.letter) {
            dispatch({ type: 'STORE_LETTER', payload: { letter: letter, isFetching: true, error: false, words: null }  });
            props.wordApiRepository.getWordsByFirstLetter(letter)
                .then(words => {
                    dispatch({ type: 'STORE_LETTER', payload: { letter: letter, isFetching: false, error: false, words: words }  });
                })
                .catch(reason => {
                    dispatch({ type: 'STORE_LETTER', payload: { letter: letter, isFetching: false, error: true }  });

                });
        }
    });

    const letterClick = letter => {
        setShowPicker(false);
        props.history.push(`/llengua/diccionari/lletres/${letter}`);
    };

    let wordsHtml = null;
    if (lettersState.isFetching) {
        wordsHtml = <LoaderComponent />;
    }
    else if (lettersState.error) {
        wordsHtml = <p>Error!</p>;
    }
    else {
        wordsHtml = lettersState.words.map(word => {
            return (
                <li>
                    <WordComponent word={word}
                        onWordClick={wordId => props.history.push(`/llengua/diccionari/mots/${wordId}`)}/>
                </li>
            )
        });
    }
    return (
        <div class='letters-content'>
            <h2 class='hidden-if-mobile'>Explora lo Diccionari lletra a lletra</h2>
            <KeyboardComponent activeLetter={props.match.params.letter} onClick={letterClick} />
            <ul>{wordsHtml}</ul>
        </div>
    );
};

export default withRouter(LettersView);
