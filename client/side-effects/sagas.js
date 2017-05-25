import {fork} from 'redux-saga/effects';
import {watchFetchHomepage} from './fetch-homepage.js';
import {watchFetchCategories} from './fetch-categories.js';
import {watchFetchArticle, 
        watchFetchList,
        watchCreateArticle} from './fetch-articles.js';

export default function* forks() {
  yield [
    fork(watchFetchHomepage),
    fork(watchFetchArticle),
    fork(watchCreateArticle),
    fork(watchFetchCategories),
    fork(watchFetchList)
  ]
}

