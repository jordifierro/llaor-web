import React from 'react';
import Word from 'words/entities/Word';
import 'words/components/WordComponent.css';

const WordComponent = props => {
    const meaningsHtml = props.word.meanings.map((meaning, index) =>
        <div className="meaning-container" key={index}>
            <p className="meaning-type">
                {meaning.type}{meaning.type.length > 0 ? "." : ""}
            </p>
            <p className="meaning-scientific">{meaning.scientific}</p>
            <p className="meaning-description">{meaning.description}</p>
            {meaning.synonymWords.length > 0 &&
                <div className="meaning-synonyms">
                    <label>Sinònims</label>
                    <br />
                    {meaning.synonymWords.map((wordId, index) =>
                        <button onClick={() => props.onWordClick(wordId)}
                            key={index}>{wordId}</button>)}
                </div>
            }
            {meaning.relatedWords.length > 0 &&
                <div className="meaning-related">
                    <label>Relacionats</label>
                    <br />
                    {meaning.relatedWords.map((wordId, index) =>
                        <button onClick={() => props.onWordClick(wordId)}
                            key={index}>{wordId}</button>)}
                </div>
            }
        </div>
    );
    return (
        <div className="word-container">
            <h1 className="word-name">{props.word.id}</h1>
            {meaningsHtml}
        </div>
    );
};

export default WordComponent;
