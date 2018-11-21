import axios from 'axios';
import { 
  GET_BOOKS_START, GET_BOOKS_SUCCESS, GET_BOOKS_FAIL,
  GET_BOOK_START, GET_BOOK_SUCCESS, GET_BOOK_FAIL,
  GET_NEW_BOOKS_START, GET_NEW_BOOKS_SUCCESS, GET_NEW_BOOKS_FAIL,
  UPDATE_BOOK_START, UPDATE_BOOK_SUCCESS, UPDATE_BOOK_FAIL,
  CREATE_BOOK_START, CREATE_BOOK_SUCCESS, CREATE_BOOK_FAIL } from './types';
  
// FETCH BOOKS
export const fetchBooks = (limit) => {
  console.log(limit);
  
  return dispatch => {
    dispatch(fetchBooksStart());
    axios
      .get(`https://sharepoint-backend.herokuapp.com/api?skip=${limit}`)
      .then(res => {
        console.log(res);
        
        dispatch(fetchBooksSuccess(res.data));
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchBooksFail(err.message));
      });
  };
};

export const fetchBooksStart = () => ({
    type: GET_BOOKS_START
});

export const fetchBooksSuccess = books => ({
  type: GET_BOOKS_SUCCESS,
  payload: {
    books
  }
});

export const fetchBooksFail = error => ({
  type: GET_BOOKS_FAIL,
  payload: error
});

// FETCH BOOK
export const fetchBook = (id) => {
  return dispatch => {
    dispatch(fetchBooksStart());
    axios
      .get(`https://sharepoint-backend.herokuapp.com/api/detail/${id}`)
      .then(res => {
        console.log(res);
        dispatch(fetchBooksSuccess(res.data));
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchBooksFail(err.message));
      });
  };
};

export const fetchBookStart = () => ({
  type: GET_BOOK_START
});

export const fetchBookSuccess = book => ({
type: GET_BOOK_SUCCESS,
payload: book
});

export const fetchBookFail = error => ({
type: GET_BOOK_FAIL,
payload: error
});

// FETCH NEW BOOKS
export const fetchNewBooks = () => {
  return dispatch => {
    dispatch(fetchBooksStart());
    axios
      .get(`https://sharepoint-backend.herokuapp.com/api/new`)
      .then(res => {
        dispatch(fetchBooksSuccess(res.data));
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchBooksFail(err.message));
      });
  };
};

export const fetchNewBooksStart = () => ({
  type: GET_NEW_BOOKS_START
});

export const fetchNewBooksSuccess = books => ({
type: GET_NEW_BOOKS_SUCCESS,
payload: {
  newBooks: books
}
});

export const fetchNewBooksFail = error => ({
type: GET_NEW_BOOKS_FAIL,
payload: error
});

// UPDATE BOOK
export const updateBook = (id) => {
  return dispatch => {
    dispatch(fetchBooksStart());
    axios
      .post(`https://sharepoint-backend.herokuapp.com/api/update/${id}`)
      .then(res => {
        console.log(res);
        dispatch(fetchBooksSuccess(res.data));
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchBooksFail(err.message));
      });
  };
};

export const updateBookStart = () => ({
  type: UPDATE_BOOK_START
});

export const updateBookSuccess = books => ({
  type: UPDATE_BOOK_SUCCESS,
  payload: books
});

export const updateBookFail = error => ({
  type: UPDATE_BOOK_FAIL,
  payload: error
});


// CREATE BOOK
export const createBook = (id) => {
  return dispatch => {
    dispatch(fetchBooksStart());
    axios
      .post(`https://sharepoint-backend.herokuapp.com/api/create/${id}`)
      .then(res => {
        console.log(res);
        dispatch(fetchBooksSuccess(res.data));
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchBooksFail(err.message));
      });
  };
};

export const createBookStart = () => ({
  type: CREATE_BOOK_START
});

export const createBookSuccess = books => ({
  type: CREATE_BOOK_SUCCESS,
  payload: books
});

export const createBookFail = error => ({
  type: CREATE_BOOK_FAIL,
  payload: error
});
