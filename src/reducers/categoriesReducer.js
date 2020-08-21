import {
  ERROR,
  FETCH_CATEGORIES_SUCCESS,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_LIST,
  CATEGORY_LOADING,
  RESET_CATEGORIES,
} from '../actions/categoriesActions';

const initialState = {
  error: '',
  categories: [],
  loading: false,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LOADING:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case UPDATE_CATEGORY_LIST:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
