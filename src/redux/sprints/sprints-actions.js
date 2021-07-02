import { createAction } from '@reduxjs/toolkit';

const fetchSprintsRequest = createAction('sprints/fetchSprintsRequest');
const fetchSprintsSuccess = createAction('sprints/fetchSprintsSuccess');
const fetchSprintsError = createAction('sprints/fetchSprintsError');

const addSprintRequest = createAction('sprints/addSprintsequest');
const addSprintSuccess = createAction('sprints/addSprintsuccess');
const addSprintError = createAction('sprints/addSprintsrror');

const deleteSprintRequest = createAction('sprints/deleteSprintsequest');
const deleteSprintSuccess = createAction('sprints/deleteSprintsuccess');
const deleteSprintError = createAction('sprints/deleteSprintsrror');

const renameSprintRequest = createAction('sprints/renameSprintsequest');
const renameSprintSuccess = createAction('sprints/renameSprintsuccess');
const renameSprintError = createAction('sprints/renameSprintsrror');

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
