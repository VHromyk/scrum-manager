import axios from 'axios';
import authActions from './auth-actions';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://scrum-manager-24.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signup = user => async dispatch => {
  dispatch(authActions.signupRequest());

  try {
    const { data } = await axios.post('/api/users/signup', user);

    token.set(data.token);
    dispatch(authActions.signupSuccess(data));
  } catch ({ message }) {
    dispatch(authActions.signupError(message));
    toast.error('Invalid credentials');
  }
};

const login = user => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const { data } = await axios.post('/api/users/login', user);

    token.set(data.token);
    dispatch(authActions.loginSuccess(data));
  } catch ({ message }) {
    dispatch(authActions.loginError(message));
    toast.error('Invalid credentials');
  }
};

const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/api/users/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch ({ message }) {
    dispatch(authActions.logoutError(message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const { auth } = getState();
  const persistedToken = auth.token;

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const { data } = await axios.get('/api/users/current');

    dispatch(authActions.getCurrentUserSuccess(data));
  } catch ({ message }) {
    dispatch(authActions.getCurrentUserError(message));
  }
};

const authOperations = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authOperations;
