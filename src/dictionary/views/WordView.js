import React from 'react';
import { withRouter } from 'react-router-dom';
import WordComponent from 'dictionary/components/WordComponent';
import LoaderComponent from 'commons/components/loader/LoaderComponent';

class WordView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            error: false,
            word: null
        };
    }

    getWord = () => {
        this.setState({isFetching: true, error: false});
        this.props.wordApiRepository.getWord(this.props.wordId)
            .then(word => this.setState({isFetching: false, error: false, word: word}))
            .catch(reason => this.setState({isFetching: false, error: true}));
    }

    componentDidMount = () => {
        this.getWord();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.wordId !== this.props.wordId) {
            this.getWord();
        }
    }

    render = () => {
        if (this.state.isFetching) {
            return <LoaderComponent />;
        }
        if (this.state.error) {
            return <p>Error!</p>;
        }
        return <WordComponent word={this.state.word}
                    onWordClick={wordId => this.props.history.push(`/llengua/diccionari/mots/${wordId}`)}/>;
    };
};

export default withRouter(WordView);
