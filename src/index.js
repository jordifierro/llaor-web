import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import './index.scss';
import NavbarComponent from 'commons/components/navbar/NavbarComponent';

import ProjectView from 'ProjectView';
import AboutView from 'AboutView';
import DictionaryView from 'dictionary/views/DictionaryView';
import WordView from 'dictionary/views/WordView';
import WordsByFirstLetterView from 'dictionary/views/WordsByFirstLetterView';
import WordsSearchView from 'dictionary/views/WordsSearchView';
import { WordApiRepository } from 'dictionary/repositories/WordApiRepository';

const apiHost = process.env['REACT_APP_API_HOST'];

ReactDOM.render(
    <Router>
        <NavbarComponent />
        <Switch>
            <Route exact path="/" component={DictionaryView} />
            <Route exact path="/projecte" component={ProjectView} />
            <Route exact path="/natri" component={AboutView} />
            <Route exact path="/llengua/diccionari" component={DictionaryView} />
            <Route exact path="/llengua/diccionari/lletres" render={() =>
                <Redirect to="/llengua/diccionari/lletres/a"/>} />
            <Route path="/llengua/diccionari/lletres/:id" render={({match}) => (
                <WordsByFirstLetterView letter={match.params.id}
                    wordApiRepository={new WordApiRepository(apiHost)} /> )}
            />
            <Route path="/llengua/diccionari/cerca/:text?" render={({match}) => (
                <WordsSearchView text={match.params.text}
                    wordApiRepository={new WordApiRepository(apiHost)} /> )}
            />
            <Route path="/llengua/diccionari/mots/:id" render={({match}) => (
                <WordView wordId={match.params.id}
                    wordApiRepository={new WordApiRepository(apiHost)} /> )}
            />
            <Route><Redirect to="/" /></Route>
        </Switch>
    </Router>
, document.getElementById('root'));
