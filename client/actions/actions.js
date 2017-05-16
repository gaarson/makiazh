import {GET_HOMEPAGE_DATA} from '../constants/consts.js';

export const getHomepageData = {
  dataPending: () => ({type: GET_HOMEPAGE_DATA.DATA_PENDING}),
  dataSuccess: (data) => ({type: GET_HOMEPAGE_DATA.DATA_SUCCESS, data}),
  dataError: (error) => ({type: GET_HOMEPAGE_DATA.DATA_ERROR, error})
}
