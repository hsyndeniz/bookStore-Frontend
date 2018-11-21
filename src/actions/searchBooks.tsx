import axios from 'axios';
import { 
  SEARCH_BOOKS_START, SEARCH_BOOKS_SUCCESS, SEARCH_BOOKS_FAIL,
  RECOMMENDED_BOOKS_START, RECOMMENDED_BOOKS_SUCCESS, RECOMMENDED_BOOKS_FAIL } from './types';
  
// SEARCH IN BOOKS
export const searchBooks = (type, word) => {
  return dispatch => {
    dispatch(searchBooksStart());
    axios
      .get(`https://sharepoint-backend.herokuapp.com/api/search?${type}=${word}`)
      .then(res => {
        console.log(res);
        dispatch(searchBooksSuccess(res.data));
      })
      .catch(err => {
        console.log(err)
        dispatch(searchBooksFail(err.message));
      });
  };
};

export const searchBooksStart = () => ({
    type: SEARCH_BOOKS_START
});

export const searchBooksSuccess = books => ({
  type: SEARCH_BOOKS_SUCCESS,
  payload: books
});

export const searchBooksFail = error => ({
  type: SEARCH_BOOKS_FAIL,
  payload: error
});

// FETCH RECOMMENDED BOOKS
export const fetchRecommendedBooks = (id) => {
  return dispatch => {
    dispatch(searchBooksStart());
    axios
      .get(`https://sharepoint-backend.herokuapp.com/api/recommended?book=${id}`)
      .then(res => {
        console.log(res);
        dispatch(searchBooksSuccess(res.data));
      })
      .catch(err => {
        console.log(err)
        dispatch(searchBooksFail(err.message));
      });
  };
};

export const fetchRecommendedBooksStart = () => ({
    type: RECOMMENDED_BOOKS_START
});

export const fetchRecommendedBooksSuccess = books => ({
  type: RECOMMENDED_BOOKS_SUCCESS,
  payload: books
});

export const fetchRecommendedBooksFail = error => ({
  type: RECOMMENDED_BOOKS_FAIL,
  payload: error
});