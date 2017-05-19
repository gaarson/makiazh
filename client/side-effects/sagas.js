import {fork} from 'redux-saga/effects';
import {watchFetchHomepage} from './fetch-homepage.js';
import {watchFetchArticle} from './fetch-articles.js';

export default function* forks() {
  yield [
    fork(watchFetchHomepage)
  ]
}

