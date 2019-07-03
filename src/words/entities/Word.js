import assert from 'commons/assert';
import Meaning from 'words/entities/Meaning';

class Word {
    constructor(id, meanings) {
        assert(typeof(id) === 'string');
        assert(meanings.map(meaning => assert(meaning instanceof Meaning)));

        this.id = id;
        this.meanings = meanings;
    }
}

export default Word;
