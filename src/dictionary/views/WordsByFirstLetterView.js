import React from 'react';
import { withRouter } from 'react-router-dom';
import WordComponent from 'dictionary/components/WordComponent';
import LoaderComponent from 'commons/components/loader/LoaderComponent';

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm',
             'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'x'];

class WordsByFirstLetterView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            error: false,
            words: null
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

    render = () => {
        const letterPickerHtml = abc.map(letter =>
            <button className={letter === this.props.letter && 'active'}
                onClick={() => this.props.history.push(`/diccionari/lletres/${letter}`)}>{letter}</button>);
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
                            onWordClick={wordId => this.props.history.push(`/diccionari/mots/${wordId}`)}/>
                    </li>
                )
            });
        }
        return (
            <React.Fragment>
                <div className='letters-picker'>
                    <ul>{letterPickerHtml}</ul>
                </div>
                <div className='content'>
                    <ul>{wordsHtml}</ul>
                </div>
            </React.Fragment>
        )
    };
};

export default withRouter(WordsByFirstLetterView);
