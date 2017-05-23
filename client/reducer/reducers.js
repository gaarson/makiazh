import {GET_HOMEPAGE_DATA,
        GET_ARTICLE,
        CREATE_ARTICLE, 
        CATEGORY_LIST} from '../constants/consts.js';

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

export const create_article = ( state = {}, action ) => {
  switch(action.type) {
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
