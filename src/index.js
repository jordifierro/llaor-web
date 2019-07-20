import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import './index.scss';
import NavbarComponent from 'commons/components/navbar/NavbarComponent';
import NotfoundComponent from 'commons/components/notfound/NotfoundComponent';

import WordView from 'words/views/WordView';
import WordsByFirstLetterView from 'words/views/WordsByFirstLetterView';
import { WordApiRepository } from 'words/repositories/WordApiRepository';

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
            <Route path="/diccionari/mots/:id" render={({match}) => (
                <WordView wordId={match.params.id}
                    wordApiRepository={new WordApiRepository(apiHost)} /> )}
            />
            <Route component={NotfoundComponent} />
        </Switch>
    </Router>
, document.getElementById('root'));
