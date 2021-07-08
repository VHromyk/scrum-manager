import axios from 'axios';
import { toast } from 'react-toastify';
import projectsActions from './projects-actions';

const fetchProjects = () => async dispatch => {
  dispatch(projectsActions.fetchProjectsRequest());

  try {
    const { data } = await axios.get('/api/projects');

    dispatch(projectsActions.fetchProjectsSuccess(data.projects));
  } catch (error) {
    dispatch(projectsActions.fetchProjectsError(error.message));

    if (error.code !== 401) {
      toast.error('Something went wrong, try again later');
    }
  }
};

const addProject =
  ({ name, description }) =>
  async dispatch => {
    const project = { name, description };
    dispatch(projectsActions.addProjectRequest());

    try {
      const { data } = await axios.post('/api/projects', project);

      dispatch(projectsActions.addProjectSuccess(data.project));
      toast.success('Project added successfully');
    } catch (error) {
      dispatch(projectsActions.fetchProjectsError(error.message));

      if (error.code !== 401) {
        toast.error('Something went wrong, try again later');
      }
    }
  };

const deleteProject = projectId => async dispatch => {
  dispatch(projectsActions.deleteProjectRequest());

  try {
    await axios.delete(`/api/projects/${projectId}`);
    dispatch(projectsActions.deleteProjectSuccess(projectId));
  } catch (error) {
    dispatch(projectsActions.deleteProjectError(error.message));

    if (error.code !== 401) {
      toast.error('Something went wrong, try again later');
    }
  }
};

// Перевірити
const renameProject =
  ({ projectId, name }) =>
  async dispatch => {
    const renameProject = { name };

    dispatch(projectsActions.renameProjectRequest());

    try {
      const { data } = await axios.patch(
        `/api/projects/${projectId}/name`,
        renameProject,
      );

      dispatch(projectsActions.renameProjectSuccess(data));
    } catch (error) {
      dispatch(projectsActions.renameProjectError(error.message));

      if (error.code !== 401) {
        toast.error('Something went wrong, try again later');
      }
    }
  };

//додавання людей до пректу
const fetchPeople = projectId => async dispatch => {
  dispatch(projectsActions.fetchPeopleRequest());

  try {
    const { data } = await axios.get(`/api/projects/${projectId}/owners`);
    data.id = projectId;

    dispatch(projectsActions.fetchPeopleSuccess(data));
  } catch ({ message }) {
    dispatch(projectsActions.fetchPeopleError(message));
    toast.error('Something went wrong, try again later');
  }
};

const addPeople = (projectId, email) => async dispatch => {
  dispatch(projectsActions.addPeopleRequest());

  try {
    const { data } = await axios.patch(
      `/api/projects/${projectId}/invite`,
      email,
    );
    dispatch(projectsActions.addPeopleSuccess(data.user.email));
  } catch ({ message }) {
    dispatch(projectsActions.addPeopleError(message));
    toast.error('Something went wrong, try again later');
  }
};

const projectsOperations = {
  fetchProjects,
  addProject,
  deleteProject,
  renameProject,
  fetchPeople,
  addPeople,
};

export default projectsOperations;
