import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom'; 
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import sagas from './side-effects/sagas.js';
import * as reducers from './reducer/reducers.js';

import App from './components/app.js';
import CategoryList from './components/category-list.js';
import Article from './components/article.js';
import Admin from './components/admin.js';
import Create from './components/admin_create.js';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

render(
    <Provider store={store}>
        <Router>
          <div>
            <Route exact path='/' component={App} />
            <Route path='/article/:id' component={Article} /> 
            <Route path='/category/:id' component={CategoryList} /> 
            <Route path='/admin' component={Admin} /> 
            <Route path='/create/:id' component={Create} /> 
          </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)
