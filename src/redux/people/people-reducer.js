import { createReducer } from '@reduxjs/toolkit';
import peopleActions from './people-actions';

const items = createReducer([], {
    [peopleActions.fetchPeopleSuccess]: (_, { payload }) => payload,
    [peopleActions.addPeopleSuccess]: (state, { payload }) => [...state, payload],
});

const peopleReducer = { items };

export default peopleReducer;