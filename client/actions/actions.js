import {GET_HOMEPAGE_DATA,
        PUBLISHED_ARTICLE,
        SEARCH_ARTICLE,
        DELETE_ARTICLE,
        GET_ARTICLE,
        EDIT_ARTICLE,
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

export const deleteArticle = {
  deletePending: (id) => ({type: DELETE_ARTICLE.DELETE_PENDING, id}),
  deleteSuccess: (success) => ({type: DELETE_ARTICLE.DELETE_SUCCESS, success}),
  deleteError: (error) => ({type: DELETE_ARTICLE.DELETE_ERROR, error})
}

export const createArticle = {
  logoPending: (logo, category) => ({type: CREATE_ARTICLE.LOGO_PENDING, logo, category}),
  writeData: (e) => ({type: CREATE_ARTICLE.WRITE_DATA, e}),
  createPending: (newArticle) => ({type: CREATE_ARTICLE.CREATE_PENDING, newArticle}),
  createSuccess: (success) => ({type: CREATE_ARTICLE.CREATE_SUCCESS, success}),
  createError: (error) => ({type: CREATE_ARTICLE.CREATE_ERROR, error})
}

export const editArticle = { 
  editPending: (id) => ({type: EDIT_ARTICLE.EDIT_PENDING, id}),
  editSuccess: (article) => ({type: EDIT_ARTICLE.EDIT_SUCCESS, article}),
  editError: (error) => ({type: EDIT_ARTICLE.EDIT_ERROR, error})
}

export const searchArticle = {
  searchPending: (text) => ({type: SEARCH_ARTICLE.SEARCH_PENDING, text}),
  searchSuccess: (list) => ({type: SEARCH_ARTICLE.SEARCH_SUCCESS, list}),
  searchError: (error) => ({type: SEARCH_ARTICLE.SEARCH_ERROR, error})
}

export const publishedArticle = {
  publishedPending: (check) => ({type: PUBLISHED_ARTICLE.PUBLISHED_PENDING, check}),
  publishedSuccess: (success) => ({type: PUBLISHED_ARTICLE.PUBLISHED_PENDING, success}),
  publishedError: (error) => ({type: PUBLISHED_ARTICLE.PUBLISHED_ERROR, error})
}
