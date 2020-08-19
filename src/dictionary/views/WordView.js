import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import WordComponent from 'dictionary/components/WordComponent';
import LoaderComponent from 'commons/components/loader/LoaderComponent';

const WordView = props => {

    const [state, setState] = useState({
        isFetching: false,
        error: false,
        word: null,
        wordId: null
    });

    const getWord = () => {
        setState({ isFetching: true, error: false, wordId: props.wordId });
        props.wordApiRepository.getWord(props.wordId)
            .then(word => setState({ isFetching: false, error: false, word: word, wordId: props.wordId }))
            .catch(reason => setState({ isFetching: false, error: true, wordId: props.wordId }));
    }

    useEffect(() => {
        if (!state.isFetching && state.wordId !== props.wordId) getWord();
    });

    if (state.isFetching || state.word === null) {
        return <LoaderComponent />;
    }
    if (state.error) {
        return <p>Error!</p>;
    }
    return <WordComponent word={state.word}
                onWordClick={wordId => props.history.push(`/llengua/diccionari/mots/${wordId}`)}/>;
};

export default withRouter(WordView);
