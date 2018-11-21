import { 
  SEARCH_BOOKS_START, SEARCH_BOOKS_SUCCESS, SEARCH_BOOKS_FAIL,
  RECOMMENDED_BOOKS_START, RECOMMENDED_BOOKS_SUCCESS, RECOMMENDED_BOOKS_FAIL } from '../../actions/types';
 
const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_BOOKS_START:
      return state;
    case SEARCH_BOOKS_SUCCESS:
      return action.payload;
    case SEARCH_BOOKS_FAIL:
      return action.payload;
    case RECOMMENDED_BOOKS_START:
      return state;
    case RECOMMENDED_BOOKS_SUCCESS:
      return action.payload;
    case RECOMMENDED_BOOKS_FAIL:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;