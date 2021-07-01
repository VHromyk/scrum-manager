import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = {
  email: null,
};

const setFalse = () => false;
const setTrue = () => true;
const setNull = () => null;
const setPayload = (_, { payload }) => payload;

const user = createReducer(initialUserState, {
  [authActions.signupSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: setPayload,
});

const isAuthenticated = createReducer(false, {
  [authActions.signupSuccess]: setTrue,
  [authActions.loginSuccess]: setTrue,
  [authActions.getCurrentUserSuccess]: setTrue,

  [authActions.signupError]: setFalse,
  [authActions.loginError]: setFalse,
  [authActions.getCurrentUserError]: setFalse,
  [authActions.logoutSuccess]: setFalse,
});

const token = createReducer(null, {
  [authActions.signupSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: setNull,
});

const isLoading = createReducer(false, {
  [authActions.signupRequest]: setTrue,
  [authActions.signupSuccess]: setFalse,
  [authActions.signupError]: setFalse,

  [authActions.loginRequest]: setTrue,
  [authActions.loginSuccess]: setFalse,
  [authActions.loginError]: setFalse,

  [authActions.logoutRequest]: setTrue,
  [authActions.logoutSuccess]: setFalse,
  [authActions.logoutError]: setFalse,

  [authActions.getCurrentUserRequest]: setTrue,
  [authActions.getCurrentUserSuccess]: setFalse,
  [authActions.getCurrentUserError]: setFalse,
});

const error = createReducer(null, {
  [authActions.signupError]: setPayload,
  [authActions.loginError]: setPayload,
  [authActions.logoutError]: setPayload,
  [authActions.getCurrentUserError]: setPayload,

  [authActions.signupRequest]: setNull,
  [authActions.loginRequest]: setNull,
  [authActions.logoutRequest]: setNull,
  [authActions.getCurrentUserRequest]: setNull,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  isLoading,
  error,
});
