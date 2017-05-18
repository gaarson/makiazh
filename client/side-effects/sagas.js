import {GET_HOMEPAGE_DATA} from '../constants/consts.js';
import {getHomepageData} from '../actions/actions.js';
import {takeLatest} from 'redux-saga';
import {call, put, fork} from 'redux-saga/effects';
import request from 'superagent';

const reqHomepageData = () => {
  return new Promise((resolve, reject) => {
    request.get('/home')
      .end((err, res) => {
        if(err) reject(err)
        
        let data = JSON.parse(res.text);
        resolve(data);
      })
  });
}

function* fetchHomepage() {
  try {
    const data = yield call(reqHomepageData);
    yield put(getHomepageData.dataSuccess(data));
  } catch(err) {
    console.log(err);
    yield put(getHomepageData.dataError(err));
  }
}

function* watchFetchHomepage() {
  yield* takeLatest(GET_HOMEPAGE_DATA.DATA_PENDING, fetchHomepage);
}

export default function* forks() {
  yield [
    fork(watchFetchHomepage)
  ]
}

