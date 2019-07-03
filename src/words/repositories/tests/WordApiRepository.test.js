import { WordApiRepository } from 'words/repositories/WordApiRepository';
import Word from 'words/entities/Word';
import Meaning from 'words/entities/Meaning';
import wordIdGet from 'words/repositories/tests/fixtures/words_id_GET.json';

test('basic', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
            resolve({
                ok: true,
                status: 200,
                json: () => {
                  return wordIdGet;
                },
            });
        });
    });

    expect(await new WordApiRepository('baseUrl').getWord('target'))
        .toEqual(new Word('paraula', [
                          new Meaning('rhododendron',
                                      'm', 'meaning',
                                      ['mot', 'word'],
                                      ['significat', 'diccionari']),
                          new Meaning('',
                                      '', 'other meaning',
                                      ['tom', 'drow'],
                                      [])]
                         )
                );
});
