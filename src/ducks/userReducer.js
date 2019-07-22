import axios from 'axios';
import { SIGNUP, LOGIN } from './actionTypes';

const initialState = {
  user: {},
  error: false,
  redirect: false
};

export const signup = (username, password, email, image, backImage) => {
  let data = axios
    .post('/api/signup', { username, password, email, image, backImage })
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

export default function(state = initialState, action) {
  console.log('action in userReducer ', action);
  let { type, payload } = action;
  switch (type) {
    case SIGNUP + '_FULFILLED':
      return { user: payload, redirect: false, error: false };
    case SIGNUP + '_REJECTED':
      return { ...state, error: payload };
    case LOGIN + '_FULFILLED':
      return {
        user: payload,
        error: false,
        redirect: false
      };
    case LOGIN + '_REJECTED':
      return { ...state, error: payload };
    default:
      return state;
  }
}
