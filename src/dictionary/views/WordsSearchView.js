import React from 'react';
import { withRouter } from 'react-router-dom';
import WordComponent from 'dictionary/components/WordComponent';
import LoaderComponent from 'commons/components/loader/LoaderComponent';

class WordsSearchView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            error: false,
            words: null
        };
    }

    searchWords = text => {
        this.setState({isFetching: true, error: false});
        this.props.wordApiRepository.searchWords(text)
            .then(words => this.setState({isFetching: false, error: false, words: words}))
            .catch(reason => this.setState({isFetching: false, error: true}));
    }

    componentDidMount = () => {
        this.searchWords(this.props.text);
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.text !== this.props.text) {
            this.searchWords(this.props.text);
        }
    }

    handleSubmit = (e) => {
        if (e) e.preventDefault();
        const text = this.input.value;
        this.props.history.push(`/diccionari/cerca/${text}`);
    }

    render = () => {
        const searcherHtml =
            <form onSubmit={this.handleSubmit}>
                <input classname="search-input" type="text" placeholder="cerca.."
                    defaultValue={this.props.text} ref={(element) => { this.input = element }} />
                <button type="submit">Cerca</button>
            </form>;
        let wordsHtml = null;
        if (this.state.isFetching) {
            wordsHtml = <LoaderComponent />;
        }
        else if (this.state.error) {
            wordsHtml = <p>Error!</p>;
        }
        else if (this.state.words !== null) {
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
                <div className='searcher'>
                    <ul>{searcherHtml}</ul>
                </div>
                <div className='content'>
                    <ul>{wordsHtml}</ul>
                </div>
            </React.Fragment>
        )
    };
};

export default withRouter(WordsSearchView);
