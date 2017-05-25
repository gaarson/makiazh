import {GET_HOMEPAGE_DATA,
        GET_ARTICLE,
        CREATE_ARTICLE,
        GET_CATEGORIES,
        CATEGORY_LIST} from '../constants/consts.js';
import {convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';

export const app = (state = [], action) => {
  switch(action.type) {
    case GET_HOMEPAGE_DATA.DATA_SUCCESS: 
      return action.data || [];
    case GET_HOMEPAGE_DATA.DATA_ERROR:
      console.log(action.error);
      return [action.error];
    default: return state;
  }
}

export const article = (state = {}, action) => {
  switch(action.type) {
    case GET_ARTICLE.ARTICLE_SUCCESS: 
          return Object.assign({}, state, action.articleData);
    case GET_ARTICLE.ARTICLE_ERROR: 
          return Object.assign({}, state, action.error);
    default: return state;
  }
}

export const create_article = 
  ( state = {
      categories: [],
      error: '',
      articleData: {}
  }, action ) => {

  switch(action.type) {
    case GET_CATEGORIES.CATEGORIES_SUCCESS: 
      return Object.assign({}, state, {categories: action.data});

    case GET_CATEGORIES.CATEGORIES_ERROR: 
      return Object.assign({}, state, {error: action.error});

    case CREATE_ARTICLE.WRITE_DATA: 
      const evt = action.e;
      let articleData = state.articleData;
      
      if(evt.target && !evt.target.files) articleData[evt.target.id] = evt.target.value;

      if(!evt.target) articleData.discription = draftToHtml(convertToRaw(evt.getCurrentContent()));
      
      if(evt.target && evt.target.files) {
        const file = evt.target.files[0];
        articleData[evt.target.id] = new FormData();
        articleData[evt.target.id].append('logopic[]', file, file.name); 
      }
      
      return Object.assign({}, state, articleData);
    default: return state;
  }

};

export const list = ( state = [], action ) => {
  switch(action.type) {
    case CATEGORY_LIST.LIST_SUCCESS: 
      return action.list;
    case CATEGORY_LIST.LIST_ERROR: 
      return [action.error];
    default: return state;
  }
}
