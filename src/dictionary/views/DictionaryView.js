import React from 'react';
import { withRouter } from 'react-router-dom';
import iconSearch from 'images/icon_search.png';

import KeyboardComponent from 'commons/components/keyboard/KeyboardComponent'
import WordView from 'dictionary/views/WordView'

const DictionaryView = props => {
    return (
        <div className='dictionary-content'>
            <div className='explore'>
                <h2>Explora lo Diccionari pallarés</h2>
                <KeyboardComponent activeLetter=''
                    onClick={letter => props.history.push(`/llengua/diccionari/lletres/${letter}`)} />
                <div className='search hidden-if-desktop'
                    onClick={() => props.history.push('/llengua/diccionari/cerca')}>
                    Cerca per text
                </div>
                <img src={iconSearch}
                    className='icon-search hidden-if-mobile'
                    alt="Cerca per text"
                    onClick={() => props.history.push('/llengua/diccionari/cerca')} />
            </div>
            <div className='daily-word'>
                <div className='explanation'>
                    <h2>Lo mot del dia</h2>
                    <div className='divider' />
                    <p>
                        Amplieu les vostres coneixements de pallarés
                        i aprofiteu pra fer anar una nova paraula cada dia.
                        Cal cap patir que no se gasten... A plaeret donques!
                    </p>
                </div>
                <div className='word'>
                    <WordView wordId='daily' wordApiRepository={props.wordApiRepository} />
                </div>
            </div>
        </div>
    );
};

export default withRouter(DictionaryView);
