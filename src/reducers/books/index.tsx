import { 
  GET_BOOKS_START, GET_BOOKS_SUCCESS, GET_BOOKS_FAIL,
  GET_BOOK_START, GET_BOOK_SUCCESS, GET_BOOK_FAIL,
  GET_NEW_BOOKS_START, GET_NEW_BOOKS_SUCCESS, GET_NEW_BOOKS_FAIL,
  UPDATE_BOOK_START, UPDATE_BOOK_SUCCESS, UPDATE_BOOK_FAIL,
  CREATE_BOOK_START, CREATE_BOOK_SUCCESS, CREATE_BOOK_FAIL } from '../../actions/types';

const bookReducer = (state = {}, action) => {  
  switch (action.type) {
    case GET_BOOKS_START:
      return state;
    case GET_BOOKS_SUCCESS:
      return action.payload;
    case GET_BOOKS_FAIL:
      return action.payload;
    case GET_BOOK_START:
      return state;
    case GET_BOOK_SUCCESS:
      return action.payload;
    case GET_BOOK_FAIL:
      return action.payload;
    case GET_NEW_BOOKS_START:
      return state;
    case GET_NEW_BOOKS_SUCCESS:
      return action.payload;
    case GET_NEW_BOOKS_FAIL:
      return action.payload;
    case UPDATE_BOOK_START:
      return state;
    case UPDATE_BOOK_SUCCESS:
      return action.payload;
    case UPDATE_BOOK_FAIL:
      return action.payload;
    case CREATE_BOOK_START:
      return state;
    case CREATE_BOOK_SUCCESS:
      return action.payload;
    case CREATE_BOOK_FAIL:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;