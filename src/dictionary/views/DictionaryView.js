import React from 'react';
import { Link } from 'react-router-dom';

import WordView from 'dictionary/views/WordView'

class DictionaryView extends React.Component {

    render = () => {
        return (
            <div className='dictionary-content'>
                <div className='daily-word'>
                    <div className='explanation'>
                        <h2>Lo mot del dia</h2>
                        <div className='divider' />
                        <p>
                            Amplieu les vostres coneixements de pallarés
                            i aprofiteu pra fer anar una nova paraula cada dia.
                            Cal cap patir que no se gasten... A plairet donques!
                        </p>
                    </div>
                    <div className='word'>
                        <WordView wordId='daily' wordApiRepository={this.props.wordApiRepository} />
                    </div>
                </div>
            </div>
        )
    };
};

export default DictionaryView;
