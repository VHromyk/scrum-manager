import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import sprintsActions from './sprints-actions';

const setFalse = () => false;
const setTrue = () => true;
const setNull = () => null;
const setPayload = (_, { payload }) => payload;

const items = createReducer([], {
  [sprintsActions.fetchSprintsSuccess]: setPayload,
  [sprintsActions.addSprintSuccess]: (state, { payload }) => [
    payload,
    ...state,
  ],
  [sprintsActions.deleteSprintSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [sprintsActions.renameSprintSuccess]: (state, { payload }) =>
    state.map(sprint => (sprint.id === payload.id ? payload : sprint)),
});

const isLoading = createReducer(false, {
  [sprintsActions.fetchSprintsRequest]: setTrue,
  [sprintsActions.fetchSprintsSuccess]: setFalse,
  [sprintsActions.fetchSprintsError]: setFalse,

  [sprintsActions.addSprintRequest]: setTrue,
  [sprintsActions.addSprintSuccess]: setFalse,
  [sprintsActions.addSprintError]: setFalse,

  [sprintsActions.deleteSprintRequest]: setTrue,
  [sprintsActions.deleteSprintSuccess]: setFalse,
  [sprintsActions.deleteSprintError]: setFalse,

  [sprintsActions.renameSprintRequest]: setTrue,
  [sprintsActions.renameSprintSuccess]: setFalse,
  [sprintsActions.renameSprintError]: setFalse,
});

const error = createReducer(null, {
  [sprintsActions.fetchSprintsError]: setPayload,
  [sprintsActions.addSprintError]: setPayload,
  [sprintsActions.deleteSprintError]: setPayload,
  [sprintsActions.renameSprintError]: setPayload,

  [sprintsActions.fetchSprintsRequest]: setNull,
  [sprintsActions.addSprintRequest]: setNull,
  [sprintsActions.deleteSprintRequest]: setNull,
  [sprintsActions.renameSprintRequest]: setNull,
});

export default combineReducers({ items, isLoading, error });
