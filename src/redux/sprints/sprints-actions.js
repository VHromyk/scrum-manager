import { createAction } from '@reduxjs/toolkit';

const fetchSprintsRequest = createAction('sprints/fetchSprintsRequest');
const fetchSprintsSuccess = createAction('sprints/fetchSprintsSuccess');
const fetchSprintsError = createAction('sprints/fetchSprintsError');

const addSprintRequest = createAction('sprints/addSprintRequest');
const addSprintSuccess = createAction('sprints/addSprintSuccess');
const addSprintError = createAction('sprints/addSprintError');

const deleteSprintRequest = createAction('sprints/deleteSprintRequest');
const deleteSprintSuccess = createAction('sprints/deleteSprintSuccess');
const deleteSprintError = createAction('sprints/deleteSprintError');

const renameSprintRequest = createAction('sprints/renameSprintRequest');
const renameSprintSuccess = createAction('sprints/renameSprintSuccess');
const renameSprintError = createAction('sprints/renameSprintError');

const sprintsActions = {
  fetchSprintsRequest,
  fetchSprintsSuccess,
  fetchSprintsError,
  addSprintRequest,
  addSprintSuccess,
  addSprintError,
  deleteSprintRequest,
  deleteSprintSuccess,
  deleteSprintError,
  renameSprintRequest,
  renameSprintSuccess,
  renameSprintError,
};

export default sprintsActions;
