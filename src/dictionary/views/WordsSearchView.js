import React from 'react';
import { withRouter } from 'react-router-dom';
import WordComponent from 'dictionary/components/WordComponent';
import LoaderComponent from 'commons/components/loader/LoaderComponent';
import iconSearch from 'images/icon_search.png';

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
        this.searchWords(this.props.match.params.text);
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.match.params.text !== this.props.match.params.text) {
            this.searchWords(this.props.match.params.text);
        }
    }

    handleSubmit = (e) => {
        if (e) e.preventDefault();
        const text = this.input.value;
        this.props.history.push(`/llengua/diccionari/cerca/${text}`);
    }

    render = () => {
        const searcherHtml =
            <form onSubmit={this.handleSubmit}>
                <input classname="search-input" type="text" placeholder="Cerca al Diccionari..."
                    defaultValue={this.props.match.params.text} ref={(element) => { this.input = element }} />
                <img src={iconSearch} />
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
                            onWordClick={wordId => this.props.history.push(`/llengua/diccionari/mots/${wordId}`)}/>
                    </li>
                )
            });
        }
        return (
            <div class='search-content'>
                <div className='searcher'>{searcherHtml}</div>
                <ul>{wordsHtml}</ul>
            </div>
        )
    };
};

export default withRouter(WordsSearchView);
