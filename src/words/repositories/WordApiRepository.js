import Word from 'words/entities/Word';
import Meaning from 'words/entities/Meaning';

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
}

const parseJsonWord = wordJson => {
    return new Word(wordJson.word, parseJsonMeanings(wordJson.meanings));
};

const parseJsonMeanings = meaningsJson => {
    return meaningsJson.map(meaningJson => {
        return new Meaning(meaningJson.scientific,
                           meaningJson.type,
                           meaningJson.description,
                           meaningJson.synonym_words,
                           meaningJson.related_words);
    })
}
