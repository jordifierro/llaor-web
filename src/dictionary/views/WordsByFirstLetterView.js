import React from 'react';
import { withRouter } from 'react-router-dom';
import WordComponent from 'dictionary/components/WordComponent';
import LoaderComponent from 'commons/components/loader/LoaderComponent';
import KeyboardComponent from 'commons/components/keyboard/KeyboardComponent';

class WordsByFirstLetterView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            error: false,
            words: null,
            showPicker: false
        };
    }

    getWordsByFirstLetter = letter => {
        this.setState({isFetching: true, error: false});
        this.props.wordApiRepository.getWordsByFirstLetter(this.props.letter)
            .then(words => this.setState({isFetching: false, error: false, words: words}))
            .catch(reason => this.setState({isFetching: false, error: true}));
    }

    componentDidMount = () => this.getWordsByFirstLetter(this.state.letter);

    componentDidUpdate = (prevProps) => {
        if (prevProps.letter !== this.props.letter) {
            this.getWordsByFirstLetter(this.props.letter);
        }
    }

    letterClick = letter => {
        this.setState({showPicker: false});
        this.props.history.push(`/llengua/diccionari/lletres/${letter}`);
    };

    render = () => {
        let wordsHtml = null;
        if (this.state.isFetching) {
            wordsHtml = <LoaderComponent />;
        }
        else if (this.state.error) {
            wordsHtml = <p>Error!</p>;
        }
        else {
            wordsHtml = this.state.words.map(word => {
                return (
                    <li>
                        <WordComponent word={word}
                            onWordClick={wordId => this.props.history.push(`/llengua/diccionari/mots/${wordId}`)}/>
                    </li>
                )
            });
        }
        return (
            <div class='letters-content'>
                <KeyboardComponent activeLetter={this.props.letter} onClick={this.letterClick} />
                <ul>{wordsHtml}</ul>
            </div>
        )
    };
};

export default withRouter(WordsByFirstLetterView);
