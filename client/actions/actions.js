import {GET_HOMEPAGE_DATA,
        GET_ARTICLE,
        CREATE_ARTICLE,
        GET_CATEGORIES,
        CATEGORY_LIST} from '../constants/consts.js';

export const getHomepageData = {
  dataPending: () => ({type: GET_HOMEPAGE_DATA.DATA_PENDING}),
  dataSuccess: (data) => ({type: GET_HOMEPAGE_DATA.DATA_SUCCESS, data}),
  dataError: (error) => ({type: GET_HOMEPAGE_DATA.DATA_ERROR, error})
}

export const getCategoryList = {
  categoryPending: (id) => ({type: CATEGORY_LIST.LIST_PENDING, id}),
  categorySuccess: (list) => ({type: CATEGORY_LIST.LIST_SUCCESS, list}),
  categoryError: (error) => ({type: CATEGORY_LIST.LIST_SUCCESS, error})
};

export const getCategories = {
  categoriesPending: () => ({type: GET_CATEGORIES.CATEGORIES_PENDING}),
  categoriesSuccess: (data) => ({type: GET_CATEGORIES.CATEGORIES_SUCCESS, data}),
  categoriesError: (error) => ({type: GET_CATEGORIES.CATEGORIES_ERROR, error})
};

export const getArticle = {
  articlePending: (id) => ({type: GET_ARTICLE.ARTICLE_PENDING, id}),
  articleSuccess: (articleData) => ({type: GET_ARTICLE.ARTICLE_SUCCESS, articleData}),
  articleError: (error) => ({type: GET_ARTICLE.ARTICLE_ERROR, error})
};

export const createArticle = {
  writeData: (e) => ({type: CREATE_ARTICLE.WRITE_DATA, e}),
  deleteArticle: (id) => ({type: CREATE_ARTICLE.DELETE_ARTICLE, id}),
  createPending: (newArticle) => ({type: CREATE_ARTICLE.CREATE_PENDING, newArticle}),
  createSuccess: (success) => ({type: CREATE_ARTICLE.CREATE_SUCCESS, success}),
  createError: (error) => ({type: CREATE_ARTICLE.CREATE_ERROR, error})
}
