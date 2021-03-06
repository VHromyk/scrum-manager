import { createAction } from '@reduxjs/toolkit';

const fetchProjectsRequest = createAction('projects/fetchProjectsRequest');
const fetchProjectsSuccess = createAction('projects/fetchProjectsSuccess');
const fetchProjectsError = createAction('projects/fetchProjectsError');

const addProjectRequest = createAction('projects/addProjectRequest');
const addProjectSuccess = createAction('projects/addProjectSuccess');
const addProjectError = createAction('projects/addProjectError');

const deleteProjectRequest = createAction('projects/deleteProjectRequest');
const deleteProjectSuccess = createAction('projects/deleteProjectSuccess');
const deleteProjectError = createAction('projects/deleteProjectError');

const renameProjectRequest = createAction('projects/renameProjectRequest');
const renameProjectSuccess = createAction('projects/renameProjectSuccess');
const renameProjectError = createAction('projects/renameProjectError');

const fetchPeopleRequest = createAction('projects/fetchPeopleRequest');
const fetchPeopleSuccess = createAction('projects/fetchPeopleSuccess');
const fetchPeopleError = createAction('projects/fetchPeopleError');

const addPeopleRequest = createAction('projects/addPeopleRequest');
const addPeopleSuccess = createAction('projects/addPeopleSuccess');
const addPeopleError = createAction('projects/addPeopleError');

const projectsActions = {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsError,
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  renameProjectRequest,
  renameProjectSuccess,
  renameProjectError,
  fetchPeopleRequest,
  fetchPeopleSuccess,
  fetchPeopleError,
  addPeopleRequest,
  addPeopleSuccess,
  addPeopleError,
};

export default projectsActions;
