import {GET_ARTICLE, 
        EDIT_ARTICLE,
        SEARCH_ARTICLE,
        CATEGORY_LIST, 
        DELETE_ARTICLE,
        CREATE_ARTICLE} from '../constants/consts.js';
import {getArticle, 
        getCategoryList, 
        editArticle,
        deleteArticle,
        searchArticle,
        createArticle} from '../actions/actions.js';
import {takeLatest} from 'redux-saga';
import {put, call} from 'redux-saga/effects';
import request from 'superagent';


const reqDeleteArticle = (id) => {
  return new Promise((resolve, reject) => {
    request.delete('/api/article/' + id)
      .end((err, res) => {
        if(err) reject(err);

        resolve(res.text);
      })
  })
}

const reqSearchArticle = (text) => {
  const string = text.value;
  return new Promise((resolve, reject) => {
    request.get('/api/search')
      .query({string})
      .end((err, res) => {
        if(err) reject(err);

        console.log(res);
        resolve(res.body);
      })
  
  })
}

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

        resolve(res.body);
      })
  })
}

const sendLogo = (File, category) => {
  console.log(File, category);
  const formData = new FormData();
  formData.append(category, File, 'logo');
  return new Promise((resolve, reject) => {
    request.post('/api/create')
      .send(formData)
      .end((err, res) => {
      if(err) reject(err)
      
      resolve(res.body);
      })
  })
}

const reqCreateArticle = (newArticle) => {
  return new Promise((resolve, reject) => {
    request.post('/api/create')
      .send(newArticle)
      .end((err, res) => {
        if(err) reject(err);

        console.log(res);
        resolve(res);
      })
  })
}

function* fetchEditData({id}) {
  try {
    const data = yield call(reqArticleData, id);
    yield put(editArticle.editSuccess(data));
  } catch(error) {
    console.log(error);
    yield put(editArticle.editError(error));
  }
}

function* fetchSearchArticle({text}) {
  try {
    const list = yield call(reqSearchArticle, text);
    yield put(searchArticle.searchSuccess(list));
  } catch(error) {
    yield put(searchArticle.searchError(error));
  }
}

function* fetchLogo({logo, category}) {
  try {
    const success = yield call(sendLogo, logo, category);
    yield put(createArticle.createSuccess(success));
  } catch(error) {
    console.log(error);
    yield put(createArticle.createError(error));
  }
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

function* fetchDeleteArticle({id}) {
  try {
    const success = yield call(reqDeleteArticle, id);
    yield put(deleteArticle.deleteSuccess(success));
  } catch(error) {
    console.log(error);
    yield put(deleteArticle.deleteError(error));
  }
}

export function* watchFetchSearch() {
  yield* takeLatest(SEARCH_ARTICLE.SEARCH_PENDING, fetchSearchArticle);
}

export function* watchFetchEditData() {
  yield* takeLatest(EDIT_ARTICLE.EDIT_PENDING, fetchEditData);
}

export function* watchDeleteArticle() {
  yield* takeLatest(DELETE_ARTICLE.DELETE_PENDING, fetchDeleteArticle);
}
export function* watchLogoFetch() {
  yield* takeLatest(CREATE_ARTICLE.LOGO_PENDING, fetchLogo);
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
