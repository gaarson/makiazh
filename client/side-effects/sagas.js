import {fork} from 'redux-saga/effects';
import {watchFetchHomepage} from './fetch-homepage.js';
import {watchFetchCategories} from './fetch-categories.js';
import {watchFetchArticle, 
        watchFetchList,
        watchFetchSearch,
        watchDeleteArticle,
        watchFetchEditData,
        watchLogoFetch,
        watchCreateArticle} from './fetch-articles.js';

export default function* forks() {
  yield [
    fork(watchDeleteArticle),
    fork(watchFetchSearch),
    fork(watchFetchEditData),
    fork(watchLogoFetch),
    fork(watchFetchHomepage),
    fork(watchFetchArticle),
    fork(watchCreateArticle),
    fork(watchFetchCategories),
    fork(watchFetchList)
  ]
}

