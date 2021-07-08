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
  } catch (error) {
    dispatch(tasksActions.fetchTasksError(error?.message));

    if (error.code !== 401) {
      toast.error('Something went wrong, try again later');
    }
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
  } catch (error) {
    dispatch(tasksActions.addTaskError(error?.message));

    if (error.code !== 401) {
      toast.error('Something went wrong, try again later');
    }
  }
};

const deleteTask = (projectId, sprintId, taskId) => async dispatch => {
  dispatch(tasksActions.deleteTaskRequest());

  try {
    await axios.delete(
      `/api/projects/${projectId}/sprints/${sprintId}/tasks/${taskId}`,
    );
    dispatch(tasksActions.deleteTaskSuccess(taskId));
  } catch (error) {
    dispatch(tasksActions.deleteTaskError(error?.message));

    if (error.code !== 401) {
      toast.error('Something went wrong, try again later');
    }
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
    } catch (error) {
      dispatch(tasksActions.changeTaskError(error?.message));

      if (error.code !== 401) {
        toast.error('Something went wrong, try again later');
      }
    }
  };

const tasksOperations = { fetchTasks, addTask, deleteTask, changeTask };

export default tasksOperations;
