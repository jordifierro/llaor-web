import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import WordComponent from 'dictionary/components/WordComponent';
import LoaderComponent from 'commons/components/loader/LoaderComponent';
import iconSearch from 'images/icon_search.png';
import { store } from 'dictionary/views/store';

const SearchView = props => {

    const { searchState, dispatch } = useContext(store);
    const searchText = props.match.params.text;
    var input = null;

    useEffect(() => {
        if (searchText !== searchState.text) {
            dispatch({ type: 'STORE_SEARCH', payload: { text: searchText, isFetching: true, error: false, words: null }  });
            props.wordApiRepository.searchWords(searchText)
                .then(words => {
                    dispatch({ type: 'STORE_SEARCH', payload: { text: searchText, isFetching: false, error: false, words: words }  });
                })
                .catch(reason => {
                    dispatch({ type: 'STORE_SEARCH', payload: { text: searchText, isFetching: false, error: true }  });

                });
        }
    });

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        const text = input.value;
        props.history.push(`/llengua/diccionari/cerca/${text}`);
    }

    const searcherHtml =
        <form onSubmit={handleSubmit}>
            <input classname="search-input" type="text" placeholder="Cerca al Diccionari..."
                defaultValue={searchText} ref={(element) => { input = element }} />
            <img src={iconSearch} />
        </form>;
    let wordsHtml = null;
    if (searchState.isFetching) {
        wordsHtml = <LoaderComponent />;
    }
    else if (searchState.error) {
        wordsHtml = <p>Error!</p>;
    }
    else if (searchState.words !== null) {
        wordsHtml = searchState.words.map(word => {
            return (
                <li>
                    <WordComponent word={word}
                        onWordClick={wordId => props.history.push(`/llengua/diccionari/mots/${wordId}`)}/>
                </li>
            )
        });
    }
    return (
        <div class='search-content'>
            <div className='searcher'>{searcherHtml}</div>
            <ul>{wordsHtml}</ul>
        </div>
    );
};

export default withRouter(SearchView);
