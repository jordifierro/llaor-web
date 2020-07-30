import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import './index.scss';
import NavbarComponent from 'commons/components/navbar/NavbarComponent';
import NotfoundComponent from 'commons/components/notfound/NotfoundComponent';

import WordView from 'dictionary/views/WordView';
import WordsByFirstLetterView from 'dictionary/views/WordsByFirstLetterView';
import WordsSearchView from 'dictionary/views/WordsSearchView';
import { WordApiRepository } from 'dictionary/repositories/WordApiRepository';

const apiHost = process.env['REACT_APP_API_HOST'];

ReactDOM.render(
    <Router>
        <NavbarComponent />
        <Switch>
            <Route exact path="/diccionari/lletres" render={() =>
                <Redirect to="/diccionari/lletres/a"/>} />
            <Route path="/diccionari/lletres/:id" render={({match}) => (
                <WordsByFirstLetterView letter={match.params.id}
                    wordApiRepository={new WordApiRepository(apiHost)} /> )}
            />
            <Route path="/diccionari/cerca/:text?" render={({match}) => (
                <WordsSearchView text={match.params.text}
                    wordApiRepository={new WordApiRepository(apiHost)} /> )}
            />
            <Route path="/diccionari/mots/:id" render={({match}) => (
                <WordView wordId={match.params.id}
                    wordApiRepository={new WordApiRepository(apiHost)} /> )}
            />
            <Route component={NotfoundComponent} />
        </Switch>
    </Router>
, document.getElementById('root'));
