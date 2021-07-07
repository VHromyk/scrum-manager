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
  }
};

const changeTask =
  // (projectId, sprintId, taskId, spentTime, currentDay) =>
  (projectId, sprintId, taskId, spentTime) => async dispatch => {
    console.log('projectId:', projectId);
    console.log('sprintId:', sprintId);
    console.log('taskId:', taskId);
    console.log('spentTime:', spentTime);
    dispatch(tasksActions.changeTaskRequest());

    try {
      const { data } = await axios.patch(
        `/api/projects/${projectId}/sprints/${sprintId}/tasks/${taskId}/time`,
        { spentTime },
      );

      dispatch(tasksActions.changeTaskSuccess(data.task));
    } catch (error) {
      dispatch(tasksActions.changeTaskError(error?.message));
    }
  };

const tasksOperations = { fetchTasks, addTask, deleteTask, changeTask };

export default tasksOperations;
