import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import { projectsReducer } from './projects';
import { sprintsReducer } from './sprints';
import { tasksReducer } from './tasks';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isAuthenticated'],
};

const projectsPersistConfig = {
  key: 'projects',
  storage,
  whitelist: ['items'],
};

const sprintsPersistConfig = {
  key: 'sprints',
  storage,
  whitelist: ['items'],
};

const tasksPersistConfig = {
  key: 'tasks',
  storage,
  whitelist: ['items'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    projects: persistReducer(projectsPersistConfig, projectsReducer),
    sprints: persistReducer(sprintsPersistConfig, sprintsReducer),
    tasks: persistReducer(tasksPersistConfig, tasksReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
