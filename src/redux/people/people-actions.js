import { createAction } from '@reduxjs/toolkit';

const fetchPeopleRequest = createAction('people/fetchPeopleRequest');
const fetchPeopleSuccess = createAction('people/fetchPeopleSuccess');
const fetchPeopleError = createAction('people/fetchPeopleError');

const addPeopleRequest = createAction('people/addPeopleRequest');
const addPeopleSuccess = createAction('people/addPeopleSuccess');
const addPeopleError = createAction('people/addPeopleError');

const peopleActions = {
    fetchPeopleRequest,
    fetchPeopleSuccess,
    fetchPeopleError,
    addPeopleRequest,
    addPeopleSuccess,
    addPeopleError,
};

export default peopleActions;