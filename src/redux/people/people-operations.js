import axios from 'axios';
import { toast } from 'react-toastify';
import peopleActions from './people-actions';

const fetchPeople = (projectId) => async dispatch => {
  dispatch(peopleActions.fetchPeopleRequest());

  try {
    const {data} = await axios.get(`/api/projects/${projectId}/owners`);

    dispatch(peopleActions.fetchPeopleSuccess(data.owners));
  } catch ({ message }) {
    dispatch(peopleActions.fetchPeopleError(message));
    toast.error('Something went wrong, try again later');
  }
};

const addPeople = ({ projectId, email }) => async dispatch => {
    const user = { email };
    dispatch(peopleActions.addPeopleRequest());
    
    try {
        const {data} = await axios.patch(`/api/projects/${projectId}/invite`, user);
        dispatch(peopleActions.addPeopleSuccess(data));
    } catch ({ message }) {
        dispatch(peopleActions.addPeopleError(message));
        toast.error('Something went wrong, try again later');
    }
};
  
const peopleOperations = {
    addPeople,
    fetchPeople,
};

export default peopleOperations;