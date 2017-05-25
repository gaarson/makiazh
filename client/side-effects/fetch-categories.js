import {GET_CATEGORIES} from '../constants/consts.js';
import {getCategories} from '../actions/actions.js';
import {takeLatest} from 'redux-saga';
import {put, call} from 'redux-saga/effects';
import request from 'superagent';

const reqCategories = () => {
  return new Promise((resolve, reject) => {
    request.get('/api/category')
      .end((err, res) => {
        if(err) reject(err);

        let data = res.body;
        resolve(data);
      });
  });
}

function* fetchCategories() {
  try {
    let list = yield call(reqCategories);
    yield put(getCategories.categoriesSuccess(list));
  } catch(error) {
    yield put(getCategories.categoriesError(error));
  }
}

export function* watchFetchCategories() {
  yield* takeLatest(GET_CATEGORIES.CATEGORIES_PENDING, fetchCategories);
}
