import axios from 'axios';
import tasksActions from './tasks-actions';

const fetchTasks = (projectId, sprintId) => async dispatch => {
  dispatch(tasksActions.fetchTasksRequest());

  try {
    const { data } = await axios.get(
      `/api/projects/${projectId}/sprints/${sprintId}/tasks`,
    );
    dispatch(
      tasksActions.fetchTasksSuccess(
        data.constructor.name === 'Array' ? data : [],
      ),
    );
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
  } catch (error) {
    dispatch(tasksActions.addTaskError(error?.message));
  }
};

const deleteTask =
  ({ projectId, taskId }) =>
  async dispatch => {
    dispatch(tasksActions.deleteTaskRequest());
    try {
      await axios.delete(`/api/projects/${projectId}/tasks/${taskId}`);
      dispatch(tasksActions.deleteTaskSuccess(taskId));
    } catch (error) {
      dispatch(tasksActions.deleteTaskError(error?.message));
    }
  };

const changeTask =
  (hoursWasted, projectId, taskId, currentDay) => async dispatch => {
    dispatch(tasksActions.changeTaskRequest());
    try {
      const { data } = await axios.patch(
        `/api/projects/${projectId}/tasks/${taskId}`,
        {
          date: currentDay,
          hours: hoursWasted,
        },
      );
      dispatch(
        tasksActions.changeTaskSuccess({
          currentDay: data.day.currentDay,
          singleHoursWasted: data.day.singleHoursWasted,
          hoursWasted: data.newWastedHours,
          taskId,
        }),
      );
    } catch (error) {
      dispatch(tasksActions.changeTaskError(error?.message));
    }
  };

const tasksOperations = { fetchTasks, addTask, deleteTask, changeTask };

export default tasksOperations;
