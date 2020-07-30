import Word from 'dictionary/entities/Word';
import Meaning from 'dictionary/entities/Meaning';

export class WordApiRepository {
    constructor(apiHost) {
        this.apiHost = apiHost;
    }

    getWord = wordId => {
        const url = `${this.apiHost}/words/${wordId}`;
        return fetch(url)
            .then(response => response.json())
            .then(json => parseJsonWord(json));
    };

    getWordsByFirstLetter = letter => {
        const url = `${this.apiHost}/words?first_letter=${letter}`;
        return fetch(url)
            .then(response => response.json())
            .then(json => parseJsonWords(json));
    }

    searchWords = text => {
        const url = `${this.apiHost}/words?search=${text}`;
        return fetch(url)
            .then(response => response.json())
            .then(json => parseJsonWords(json));
    }
}

const parseJsonWords = wordsJson =>
    wordsJson.map(wordJson => parseJsonWord(wordJson));

const parseJsonWord = wordJson =>
    new Word(wordJson.word, parseJsonMeanings(wordJson.meanings));

const parseJsonMeanings = meaningsJson =>
    meaningsJson.map(meaningJson => {
        return new Meaning(meaningJson.scientific,
                           meaningJson.type,
                           meaningJson.description,
                           meaningJson.synonym_words,
                           meaningJson.related_words);
    });
