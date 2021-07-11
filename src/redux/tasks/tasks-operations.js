import axios from 'axios';
import { toast } from 'react-toastify';
import tasksActions from './tasks-actions';

const fetchTasks = (projectId, sprintId) => async dispatch => {
  dispatch(tasksActions.fetchTasksRequest());

  try {
    const { data } = await axios.get(
      `/api/projects/${projectId}/sprints/${sprintId}/tasks`,
    );

    dispatch(tasksActions.fetchTasksSuccess(data.tasks));
  } catch ({ message }) {
    dispatch(tasksActions.fetchTasksError(message));
  }
};

const addTask = (task, projectId, sprintId) => async dispatch => {
  dispatch(tasksActions.addTaskRequest());

  try {
    const { data } = await axios.post(
      `/api/projects/${projectId}/sprints/${sprintId}/tasks`,
      task,
    );
    dispatch(tasksActions.addTaskSuccess(data.task));
    toast.success('Task added successfully');
  } catch ({ message }) {
    dispatch(tasksActions.addTaskError(message));
  }
};

const deleteTask = (projectId, sprintId, taskId) => async dispatch => {
  dispatch(tasksActions.deleteTaskRequest());

  try {
    await axios.delete(
      `/api/projects/${projectId}/sprints/${sprintId}/tasks/${taskId}`,
    );
    dispatch(tasksActions.deleteTaskSuccess(taskId));
  } catch ([message]) {
    dispatch(tasksActions.deleteTaskError(message));
  }
};

const changeTask =
  (projectId, sprintId, taskId, spentTime) => async dispatch => {
    dispatch(tasksActions.changeTaskRequest());

    try {
      const { data } = await axios.patch(
        `/api/projects/${projectId}/sprints/${sprintId}/tasks/${taskId}/time`,
        { spentTime },
      );

      dispatch(tasksActions.changeTaskSuccess(data.task));
    } catch ({ message }) {
      dispatch(tasksActions.changeTaskError(message));
    }
  };

const tasksOperations = { fetchTasks, addTask, deleteTask, changeTask };

export default tasksOperations;
