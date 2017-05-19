import {GET_ARTICLE, GET_CATEGORY_LIST} from '../constants/consts.js';
import {getArticle, getCategoryList} from '../actions/actions.js';
import {takeLatest} from 'redux-saga';
import {put, call} from 'redux-saga/effects';
import request from 'superagent';

const reqArticleData = (article_id) => {
  return new Promise((resolve, reject) => {
    request.get('/article/' + article_id)
      .end((err, res) => {
        if(err) reject(err)
        console.log(res);
        let data = JSON.parse(res.text);
        resolve(data);
      })
  });
}

function* fetchArticle() {
  try {
    const data = yield call(reqArticleData);
    yield put(getHomepageData.dataSuccess(data));
  } catch(err) {
    yield put(getHomepageData.dataError(err));
  }
}

export function* watchFetchArticle() {
  yield* takeLatest(GET_ARTICLE.ARTICLE_PENDING, fetchArticle);
}
