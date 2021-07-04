import axios from 'axios';
import { toast } from 'react-toastify';
import peopleActions from './people-actions';

axios.defaults.baseURL = 'https://scrum-manager-24.herokuapp.com/api';

const fetchPeople = (projectId) => async dispatch => {
  dispatch(peopleActions.fetchPeopleRequest());

  try {
    const {data} = await axios.get(`/projects/${projectId}/owners`);

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
        const {data} = await axios.patch(`/projects/${projectId}/invite`, user);
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