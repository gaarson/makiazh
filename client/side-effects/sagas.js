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
        
        console.log(res);
        resolve(res.body)
      })
  });
}

function* fetchHomepage () {
  try {
    const homepageData = yield call(reqHomepageData);
    yield put(getHomepageData.dataSuccess(homepageData));
  } catch(err) {
    console.log(err);
    yield put(getHomepageData.dataError(err));
  }
}

function* watchFetchHomepage() {
  yield* takeLatest(GET_HOMEPAGE_DATA.DATA_PENDING ,fetchHomepage);
}

export default function* forks() {
  yield [
    fork(watchFetchHomepage)
  ]
}

