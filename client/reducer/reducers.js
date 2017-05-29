import {GET_HOMEPAGE_DATA,
        SEARCH_ARTICLE,
        DELETE_ARTICLE,
        EDIT_ARTICLE,
        GET_ARTICLE,
        CREATE_ARTICLE,
        GET_CATEGORIES,
        CATEGORY_LIST} from '../constants/consts.js';
import { convertToRaw } from 'draft-js';
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

export const findList = (state = [], action) => {
  switch(action.type) {
    case SEARCH_ARTICLE.SEARCH_SUCCESS: 
      return action.list;
      
    case SEARCH_ARTICLE.SEARCH_ERROR:
      console.log(action.error);
      return state;

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
    case EDIT_ARTICLE.EDIT_SUCCESS: 
      state.articleData = action.article;
      console.log(state);
      return Object.assign({}, state, {articleData: action.article})

    case EDIT_ARTICLE.EDIT_ERROR:
      console.log(action);
      return state;
      
    case GET_CATEGORIES.CATEGORIES_SUCCESS: 
      return Object.assign({}, state, {categories: action.data});

    case GET_CATEGORIES.CATEGORIES_ERROR: 
      return Object.assign({}, state, {error: action.error});

    case CREATE_ARTICLE.WRITE_DATA: 
      const evt = action.e;
      let articleData = state.articleData;
      
      if(evt.target) articleData[evt.target.id] = evt.target.value;
      else articleData.discription = draftToHtml(convertToRaw(evt.getCurrentContent()));
      
      return Object.assign({}, state, articleData);
    case CREATE_ARTICLE.CREATE_SUCCESS: 
      if(action.success.articleId) 
        return Object.assign({}, state, 
          state.articleData.directory = action.success.directory,
          state.articleData.articleId = action.success.articleId
        );
      return state;

    case CREATE_ARTICLE.CREATE_ERROR: 
      return Object.assign({}, state, {error: action.error});

    default: return state;
  }

};



export const list = ( state = [], action ) => {
  switch(action.type) {
    case DELETE_ARTICLE.DELETE_SUCCESS:
      return state.filter((item) => item.id != action.success);

    case DELETE_ARTICLE.DELETE_ERROR: 
      return state;
    case CATEGORY_LIST.LIST_SUCCESS: 
      return action.list;
    case CATEGORY_LIST.LIST_ERROR: 
      return [action.error];
    default: return state;
  }
}
