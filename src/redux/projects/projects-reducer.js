import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import projectsActions from './projects-actions';

const setFalse = () => false;
const setTrue = () => true;
const setNull = () => null;
const setPayload = (_, { payload }) => payload;

const items = createReducer([], {
  [projectsActions.fetchProjectsSuccess]: setPayload,
  [projectsActions.addProjectSuccess]: (state, { payload }) => [
    payload,
    ...state,
  ],
  [projectsActions.deleteProjectSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  [projectsActions.renameProjectSuccess]: (state, { payload }) =>
    state.map(project => (project.id === payload.id ? payload : project)),
});

const isLoading = createReducer(false, {
  [projectsActions.fetchProjectsRequest]: setTrue,
  [projectsActions.fetchProjectsSuccess]: setFalse,
  [projectsActions.fetchProjectsError]: setFalse,

  [projectsActions.addProjectRequest]: setTrue,
  [projectsActions.addProjectSuccess]: setFalse,
  [projectsActions.addProjectError]: setFalse,

  [projectsActions.deleteProjectRequest]: setTrue,
  [projectsActions.deleteProjectSuccess]: setFalse,
  [projectsActions.deleteProjectError]: setFalse,

  [projectsActions.renameProjectRequest]: setTrue,
  [projectsActions.renameProjectSuccess]: setFalse,
  [projectsActions.renameProjectError]: setFalse,
});

const error = createReducer(null, {
  [projectsActions.fetchProjectsError]: setPayload,
  [projectsActions.addProjectError]: setPayload,
  [projectsActions.deleteProjectError]: setPayload,
  [projectsActions.renameProjectError]: setPayload,

  [projectsActions.fetchProjectsRequest]: setNull,
  [projectsActions.addProjectRequest]: setNull,
  [projectsActions.deleteProjectRequest]: setNull,
  [projectsActions.renameProjectRequest]: setNull,
});

export default combineReducers({ items, isLoading, error });
