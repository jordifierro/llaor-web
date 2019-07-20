import { WordApiRepository } from 'words/repositories/WordApiRepository';
import Word from 'words/entities/Word';
import Meaning from 'words/entities/Meaning';
import wordIdGet from 'words/repositories/tests/fixtures/words_id_GET.json';
import wordByFirstLetterGet from 'words/repositories/tests/fixtures/words_first_letter_GET.json';
import wordsSeachGet from 'words/repositories/tests/fixtures/words_search_GET.json';

test('getWord', async () => {
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

test('getWordsByFirstLetter', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
            resolve({
                ok: true,
                status: 200,
                json: () => {
                  return wordByFirstLetterGet;
                },
            });
        });
    });

    expect(await new WordApiRepository('baseUrl').getWordsByFirstLetter('a'))
        .toEqual([
                new Word('paraula', [
                          new Meaning('rhododendron',
                                      'm', 'first meaning',
                                      ['other', 'one'],
                                      []),
                          new Meaning('ferrugineum',
                                      '', 'second meaning',
                                      [],
                                      ['two', 'three'])]
                         ),
                new Word('mot', [
                          new Meaning('',
                                      '', 'meaning 1',
                                      ['synon', 'nim'],
                                      ['rel'])
                                  ]
                         )
        ]);
});

test('searchWords', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
            resolve({
                ok: true,
                status: 200,
                json: () => {
                  return wordsSeachGet;
                },
            });
        });
    });

    expect(await new WordApiRepository('baseUrl').searchWords('text'))
        .toEqual([
                new Word('paraula', [
                          new Meaning('rhododendron',
                                      'm', 'first meaning',
                                      ['other', 'one'],
                                      []),
                          new Meaning('ferrugineum',
                                      '', 'second meaning',
                                      [],
                                      ['two', 'three'])]
                         ),
                new Word('mot', [
                          new Meaning('',
                                      '', 'meaning 1',
                                      ['synon', 'nim'],
                                      ['rel'])
                                  ]
                         )
        ]);
});
