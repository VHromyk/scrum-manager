import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import { authOperations } from './redux/auth';
import Spinner from './components/Spinner';
import HeaderWrapper from './components/HeaderWrapper';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import routes from './routes';
import OneProjectPage from './views/OneProjectPage';

// const RegisterPage = lazy(() =>
//   import('./views/RegisterPage' /* webpackChunkName: 'register-page' */),
// );

// const LoginPage = lazy(() =>
//   import('./views/LoginPage' /* webpackChunkName: 'login-page' */),
// );

// const ProjectsPage = lazy(() =>
//   import('./views/ProjectsPage' /* webpackChunkName: 'projects-page' */),
// );

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <OneProjectPage />
      {/* <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute
            path={routes.signup}
            restricted
            redirectTo={routes.projects}
          >
            <RegisterPage />
          </PublicRoute>
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.projects}
          >
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path={routes.projects} redirectTo={routes.signup}>
            <ProjectsPage />
          </PrivateRoute>
          <Redirect to={routes.signup} />
        </Switch>
      </Suspense> */}
    </>
  );
}

export default App;
