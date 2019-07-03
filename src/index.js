import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.scss';
import WordView from 'words/views/WordView';
import { WordApiRepository } from 'words/repositories/WordApiRepository';

const apiHost = process.env['REACT_APP_API_HOST'];

ReactDOM.render(
    <Router>
        <Route path="/words/:id" render={({match}) => (
            <WordView wordId={match.params.id}
                wordApiRepository={new WordApiRepository(apiHost)} /> )}
        />
    </Router>
, document.getElementById('root'));
