import axios from 'axios';
import taskActions from './task-actions';

const fetchTasks = projectId => async dispatch => {
  dispatch(taskActions.fetchTaskRequest());
  try {
    const { data } = await axios.get(`/api/projects/${projectId}/tasks`);
    dispatch(
      taskActions.fetchTaskSuccess(
        data.constructor.name === 'Array' ? data : [],
      ),
    );
  } catch (error) {
    dispatch(taskActions.fetchTaskError(error?.message));
  }
};

const addTask = (tasks, projectId) => async dispatch => {
  dispatch(taskActions.addTaskRequest());
  try {
    const { data } = await axios.post(
      `/api/projects/${projectId}/tasks`,
      tasks,
    );
    dispatch(taskActions.addTaskSuccess({ ...data, _id: data.id }));
  } catch (error) {
    dispatch(taskActions.addTaskError(error?.message));
  }
};

const deleteTask =
  ({ projectId, taskId }) =>
  async dispatch => {
    dispatch(taskActions.deleteTaskRequest());
    try {
      await axios.delete(`/api/projects/${projectId}/tasks/${taskId}`);
      dispatch(taskActions.deleteTaskSuccess(taskId));
    } catch (error) {
      dispatch(taskActions.deleteTaskError(error?.message));
    }
  };

const changeTask =
  (hoursWasted, projectId, taskId, currentDay) => async dispatch => {
    dispatch(taskActions.changeTaskRequest());
    try {
      const { data } = await axios.patch(
        `/api/projects/${projectId}/tasks/${taskId}`,
        {
          date: currentDay,
          hours: hoursWasted,
        },
      );
      dispatch(
        taskActions.changeTaskSuccess({
          currentDay: data.day.currentDay,
          singleHoursWasted: data.day.singleHoursWasted,
          hoursWasted: data.newWastedHours,
          taskId,
        }),
      );
    } catch (error) {
      dispatch(taskActions.changeTaskError(error?.message));
    }
  };

const taskOperations = { fetchTasks, addTask, deleteTask, changeTask };

export default taskOperations;
