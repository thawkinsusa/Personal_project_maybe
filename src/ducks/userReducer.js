import axios from 'axios';
import { SIGNUP, LOGIN, GET_USER, LOGOUT } from './actionTypes';

const initialState = {
  user: {},
  error: false,
  redirect: false
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: axios.delete('/api/logout')
  };
};

export const signup = (username, password, email, image, date ) => {
  let data = axios
    .post('/api/signup', { username, password, email, image, date  })
    .then(res => res.data);
  return {
    type: SIGNUP,
    payload: data
  };
};

export const login = (username, password) => {
  let data = axios
    .post('/api/login', { username, password })
    .then(res => res.data);
  return {
    type: LOGIN,
    payload: data
  };
};

export const getUser = () => {
  let data = axios.get('/api/user').then(res => res.data);
  return {
    type: GET_USER,
    payload: data
  };
};



export default function (state = initialState, action) {
  console.log('action in userReducer ', action);
  let { type, payload } = action;
  switch (type) {
    case SIGNUP + '_FULFILLED':
      console.log('paylaod', payload)
      return { user: payload, redirect: false, error: false };
    case SIGNUP + '_REJECTED':
      return { ...state, error: payload };
    case LOGIN + '_FULFILLED':
      return {
        user: payload,
        error: false,
        redirect: false
      };
    case LOGOUT + '_FULFILLED':
      return { ...state, user: {} }
    case LOGIN + '_REJECTED':
      return { ...state, error: payload };
    case GET_USER + '_PENDING':
      return { ...state, redirect: false, error: false };
    case GET_USER + '_FULFILLED':
      return { ...state, user: payload, error: false };
    case GET_USER + '_REJECTED':
      return { ...state, redirect: true, error: payload };

    default:
      return state;
  }
}
