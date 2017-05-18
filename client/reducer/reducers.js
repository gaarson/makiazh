import {GET_HOMEPAGE_DATA} from '../constants/consts.js';

export const app = (state = [], action) => {
  switch(action.type) {
    case GET_HOMEPAGE_DATA.DATA_SUCCESS: 
      console.log(action.data);
      return action.data || [];
    case GET_HOMEPAGE_DATA.DATA_ERROR:
      console.log(action.error);
      return [action.error];
    default: return state;
  }
}
