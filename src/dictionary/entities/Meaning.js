import assert from 'commons/assert';

class Meaning {
    constructor(scientific, type, description, synonymWords, relatedWords) {
        assert(typeof(scientific) === 'string');
        assert(typeof(type) === 'string');
        assert(typeof(description) === 'string');
        assert(synonymWords.map(word => assert(typeof(word) === 'string')));
        assert(relatedWords.map(word => assert(typeof(word) === 'string')));

        this.scientific = scientific;
        this.type = type;
        this.description = description;
        this.synonymWords = synonymWords;
        this.relatedWords = relatedWords;
    }
}

export default Meaning;
