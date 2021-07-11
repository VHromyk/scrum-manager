import axios from 'axios';
import { toast } from 'react-toastify';
import projectsActions from './projects-actions';

const fetchProjects = () => async dispatch => {
  dispatch(projectsActions.fetchProjectsRequest());

  try {
    const { data } = await axios.get('/api/projects');

    dispatch(projectsActions.fetchProjectsSuccess(data.projects));
  } catch ({ message }) {
    dispatch(projectsActions.fetchProjectsError(message));
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
    } catch ({ message }) {
      dispatch(projectsActions.fetchProjectsError(message));
    }
  };

const deleteProject = projectId => async dispatch => {
  dispatch(projectsActions.deleteProjectRequest());

  try {
    await axios.delete(`/api/projects/${projectId}`);
    dispatch(projectsActions.deleteProjectSuccess(projectId));
  } catch ({ message }) {
    dispatch(projectsActions.deleteProjectError(message));
  }
};

const renameProject =
  ({ projectId, newName: name }) =>
  async dispatch => {
    const renameProject = { name };

    dispatch(projectsActions.renameProjectRequest());

    try {
      const { data } = await axios.patch(
        `/api/projects/${projectId}/name`,
        renameProject,
      );

      const newProjectName = data.project.name;
      dispatch(
        projectsActions.renameProjectSuccess({ newProjectName, projectId }),
      );
    } catch ({ message }) {
      dispatch(projectsActions.renameProjectError(message));
    }
  };

const addPeople = (projectId, email) => async dispatch => {
  dispatch(projectsActions.addPeopleRequest());

  try {
    const { data } = await axios.patch(
      `/api/projects/${projectId}/invite`,
      email,
    );

    const newTeamMember = data.user.email;
    dispatch(projectsActions.addPeopleSuccess({ newTeamMember, projectId }));
  } catch ({ message }) {
    dispatch(projectsActions.addPeopleError(message));

    if (message === 'Request failed with status code 404') {
      toast.error('User with such email does not exist');
      return;
    }
  }
};

const projectsOperations = {
  fetchProjects,
  addProject,
  deleteProject,
  renameProject,
  addPeople,
};

export default projectsOperations;
