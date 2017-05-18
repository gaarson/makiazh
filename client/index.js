import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom'; 
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import sagas from './side-effects/sagas.js';
import * as reducers from './reducer/reducers.js';

import App from './components/app.js';
import Admin from './components/admin.js';
import Create from './components/admin_create.js';
import Article from './components/article.js';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

render(
    <Provider store={store}>
        <Router>
          <div>
            <Route path='/' component={App} />
            <Route path='article/:id' component={Article} />
          </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)
