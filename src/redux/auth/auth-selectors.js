const getIsAuthenticated = state => state.auth.isAuthenticated; // TODO: чому не auth.user.isAuthenticated?
const getUserEmail = state => state.auth.user.email;

const authSelectors = { getIsAuthenticated, getUserEmail };

export default authSelectors;
