import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import * as serviceWorker from 'serviceWorker';

import './index.scss';
import NavbarComponent from 'commons/components/navbar/NavbarComponent';
import FooterComponent from 'commons/components/footer/FooterComponent';

import ProjectView from 'ProjectView';
import AboutView from 'AboutView';
import ContactView from 'ContactView';
import DictionaryView from 'dictionary/views/DictionaryView';
import WordView from 'dictionary/views/WordView';
import WordsByFirstLetterView from 'dictionary/views/WordsByFirstLetterView';
import WordsSearchView from 'dictionary/views/WordsSearchView';
import { WordApiRepository } from 'dictionary/repositories/WordApiRepository';
import backgroundTopMountains from 'images/background_top_mountains.png'

const apiHost = process.env['REACT_APP_API_HOST'];

ReactDOM.render(
    <Router>
        <NavbarComponent />
        <div class="top-mountains">
            <img src={backgroundTopMountains} class="top-mountains" />
        </div>
        <div class="content">
            <Switch>
                <Route exact path="/">
                    <DictionaryView wordApiRepository={new WordApiRepository(apiHost)} />
                </Route>
                <Route exact path="/projecte">
                    <ProjectView />
                </Route>
                <Route exact path="/natri">
                    <AboutView />
                </Route>
                <Route exact path="/mane">
                    <ContactView />
                </Route>
                <Route exact path="/llengua/diccionari">
                    <DictionaryView wordApiRepository={new WordApiRepository(apiHost)} />
                </Route>
                <Route exact path="/llengua/diccionari/lletres">
                    <Redirect to="/llengua/diccionari/lletres/a"/>
                </Route>
                <Route path="/llengua/diccionari/lletres/:letter">
                    <WordsByFirstLetterView wordApiRepository={new WordApiRepository(apiHost)} />
                </Route>
                <Route path="/llengua/diccionari/cerca/:text?">
                    <WordsSearchView wordApiRepository={new WordApiRepository(apiHost)} />
                </Route>
                <Route path="/llengua/diccionari/mots/:id" render={({match}) => (
                    <WordView wordId={match.params.id}
                        wordApiRepository={new WordApiRepository(apiHost)} /> )}
                />
                <Route><Redirect to="/" /></Route>
            </Switch>
        </div>
        <FooterComponent />
    </Router>
, document.getElementById('root'));

serviceWorker.register();
