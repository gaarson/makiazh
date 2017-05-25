import {GET_ARTICLE, CATEGORY_LIST, CREATE_ARTICLE} from '../constants/consts.js';
import {getArticle, getCategoryList, createArticle} from '../actions/actions.js';
import {takeLatest} from 'redux-saga';
import {put, call} from 'redux-saga/effects';
import request from 'superagent';

const reqArticleData = (article_id) => {
  return new Promise((resolve, reject) => {
    request.get('/api/article/' + article_id)
      .end((err, res) => {
        if(err) reject(err)

        let data = res.body[0];
        resolve(data);
      })
  });
}

const reqArticlesList = (category_id) => {
  return new Promise((resolve, reject) => {
    request.get('/api/list/' + category_id)
      .end((err, res) => {
        if(err) reject(err);

        console.log(res.body);
        resolve(res.body);
      })
  })
}

const reqCreateArticle = (newArticle) => {
  return new Promise((resolve, reject) => {
    console.log(newArticle);
    request.post('/api/create')
      .send(newArticle)
      .end((err, res) => {
        if(err) reject(err);

        console.log(res);
        resolve(res);
      })
  })
}

function* fetchCreation({newArticle}) {
  try {
    const success = yield call(reqCreateArticle, newArticle);
    yield put(createArticle.createSuccess(success));
  } catch(error) {
    console.log(error);
    yield put(createArticle.createError(error));
  }
} 

function* fetchList({id}) {
  try{
    const list = yield call(reqArticlesList, id);
    yield put(getCategoryList.categorySuccess(list));
  } catch(error) {
    console.log(error);
    yield put(getCategoryList.categoryError(error))
  }
}

function* fetchArticle({id}) {
  try {
    const data = yield call(reqArticleData, id);
    yield put(getArticle.articleSuccess(data));
  } catch(err) {
    yield put(getArticle.articleError(err));
  }
}

export function* watchCreateArticle() {
  yield* takeLatest(CREATE_ARTICLE.CREATE_PENDING, fetchCreation);
}

export function* watchFetchArticle() {
  yield* takeLatest(GET_ARTICLE.ARTICLE_PENDING, fetchArticle);
}

export function* watchFetchList() {
  yield* takeLatest(CATEGORY_LIST.LIST_PENDING, fetchList);
}
