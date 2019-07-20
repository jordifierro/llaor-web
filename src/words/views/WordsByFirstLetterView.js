import React from 'react';
import { withRouter } from 'react-router-dom';
import WordComponent from 'words/components/WordComponent';
import LoaderComponent from 'commons/components/loader/LoaderComponent';

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm',
             'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'x'];

class WordsByFirstLetterView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            error: false,
            letter: 'a',
            words: null
        };
    }

    getWordsByFirstLetter = letter => {
        this.setState({isFetching: true, error: false});
        this.props.wordApiRepository.getWordsByFirstLetter(this.state.letter)
            .then(words => this.setState({isFetching: false, error: false, words: words}))
            .catch(reason => this.setState({isFetching: false, error: true}));
    }

    componentDidMount = () => this.getWordsByFirstLetter(this.state.letter);

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.letter !== this.state.letter) {
            this.getWordsByFirstLetter(this.state.letter);
        }
    }

    render = () => {
        const letterPickerHtml = abc.map(letter =>
            <button className={letter === this.state.letter && 'active'}
                onClick={() => this.setState({letter: letter})}>{letter}</button>);
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
                            onWordClick={wordId => this.props.history.push(`/words/${wordId}`)}/>
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
