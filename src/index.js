import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.scss';
import WordView from 'words/views/WordView';
import WordsByFirstLetterView from 'words/views/WordsByFirstLetterView';
import NavbarComponent from 'commons/components/navbar/NavbarComponent';
import { WordApiRepository } from 'words/repositories/WordApiRepository';

const apiHost = process.env['REACT_APP_API_HOST'];

ReactDOM.render(
    <Router>
        <NavbarComponent />
        <Route path="/diccionari/abc" render={({match}) => (
            <WordsByFirstLetterView wordApiRepository={new WordApiRepository(apiHost)} /> )}
        />
        <Route path="/diccionari/mots/:id" render={({match}) => (
            <WordView wordId={match.params.id}
                wordApiRepository={new WordApiRepository(apiHost)} /> )}
        />
    </Router>
, document.getElementById('root'));
