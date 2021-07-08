import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { authOperations } from '../../redux/auth';
import { sprintsOperations, sprintsSelectors } from '../../redux/sprints';
import {
  tasksOperations,
  tasksSelectors,
  tasksActions,
} from '../../redux/tasks';
import SprintModal from '../../components/SprintModal';
import AddButton from '../../components/AddButton';
import IconButton from '../../components/IconButton';
import SvgComponent from '../../components/SvgComponent';
import Container from '../../components/Container';
import Aside from '../../components/Aside';
import AsideListSprint from '../../components/AsideListSprint';
import SprintTable from '../../components/SprintTable';
import TaskModal from '../../components/TaskModal';
import Diagram from '../../components/Diagram';
import styles from './OneSprintsPage.module.scss';

const OneSprintsPage = () => {
  const [createSprint, setCreateSprint] = useState(false);
  const [createTask, setCreateTask] = useState(false);
  const [newName, setNewName] = useState('');
  const [showInput, setShowInput] = useState(true);
  const [showIcon, setShowIcon] = useState(true);
  const [showDiagram, setShowDiagram] = useState(false);
  const { projectId, sprintId } = useParams();
  const { taskId } = useParams(); // undefined
  const [count, setCount] = useState(Number(1));

  const sprints = useSelector(sprintsSelectors.getAllSprints);
  const tasks = useSelector(tasksSelectors.getTasks);

  const dispatch = useDispatch();

  const filter = useSelector(tasksSelectors.getFilter);

  // Робимо масив дат з наявних тасків і записуємо початкову дату в state
  // if (tasks.length !== 0) {
  // tasks.map(item => {
  //   if (arrayDate.find(item.startDate)) {
  // return } else { setArrayDate(prevstate => prevstate.push(item.taskDate))
  // });
  // const sortByDate = (a, b) => new Date(a) - new Date(b);
  // const setArrayDate(prevstate => prevstate.sort(sortByDate));
  // setCurrentDate(arrayDate[0].toLocaleDateString());
  // }

  // const increment = (e) => {
  //   e.preventDefault();
  //   setCurrentDate(arrayDate[0 + 1].toLocaleDateString());
  // };

  //  const decrement = e => {
  //    e.preventDefault();
  //    setCurrentDate(arrayDate[0 - 1].toLocaleDateString());
  //  };


  const currentSprint = sprints.find(({ id }) => id === sprintId);

  const doArrayOfDate = () => {
    let start = new Date(currentSprint.startDate),
      end = new Date(currentSprint.endDate),
      array = [];

    for (let q = start; q <= end; q.setDate(q.getDate() + 1)) {
      array.push(q.toLocaleDateString());
    }
    return array;
  };

  const [arrayDate, setArrayDate] = useState(doArrayOfDate());
  const [currentDate, setCurrentDate] = useState(arrayDate[0]);

  const increment = e => {
    e.preventDefault();

    const currentIndex = arrayDate.indexOf(currentDate);
    if (currentIndex === arrayDate.length - 1) {
      return;
    } else {
      setCurrentDate(arrayDate[currentIndex + 1]);
    }
    if (count > 0 && count < arrayDate.length) {
      setCount(prevstate => prevstate + 1);
    }
  };

  const decrement = e => {
    e.preventDefault();
    const currentIndex = arrayDate.indexOf(currentDate);
    console.log(currentDate);
    if (currentIndex === 0) {
      setCurrentDate(arrayDate[0]);
    } else {
      setCurrentDate(arrayDate[currentIndex - 1]);
    }
    if ((count > 1 && count < arrayDate.length) || count === arrayDate.length) {
      setCount(prevstate => prevstate - 1);
    }
  };


  // -------------
  //   const dispatch = useDispatch();
  // const filter = useSelector(tasksSelectors.getFilter);

  const onHandleInputSearch = useCallback(
    e => {
      dispatch(tasksActions.changeFilter(e.currentTarget.value));
    },
    [dispatch],
  );



  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
    dispatch(tasksOperations.fetchTasks(projectId, sprintId));
  }, [dispatch, projectId, sprintId]);


  const currentSprint = sprints.find(({ id }) => id === sprintId);

  // const currentTask = tasks.find(({ id }) => id === sprintId);

  const onRenameSprint = ({ projectId, sprintId, newName }) =>
    dispatch(sprintsOperations.renameSprint({ projectId, sprintId, newName }));

  const changeInputName = e => {
    setNewName(e.target.value);
  };

  const onSubmitRenameName = e => {
    e.preventDefault();
    onRenameSprint(projectId, sprintId, newName);
    setShowInput(true);
    setShowIcon(true);
  };

  const buttonHandler = () => {
    setCreateSprint(true);
  };

  const buttonHandlerTask = () => {
    setCreateTask(true);
  };

  const buttonHandlerDiagram = () => {
    setShowDiagram(true);
  };

  const btnCloseDiagram = () => {
    setShowDiagram(false);
  };

  const btnCloseSprint = () => {
    setCreateSprint(false);
  };

  const btnCloseTask = () => {
    setCreateTask(false);
  };
  const changeIcon = () => {
    setShowIcon(false);
    setShowInput(false);
  };
  return (
    <>
      <Container classes={styles.container}>
        <div className={styles.sprintsWrapper}>
          <Aside
            createName="Create a sprint"
            showName="Show sprints"
            onClick={buttonHandler}
          >
            <AsideListSprint />
          </Aside>
          <div className={styles.sprintsSideContainer}>
            <div className={styles.formContainer}>
              <div className={styles.pagesContainer}>
                <div className={styles.containerPages}>
                  <IconButton
                    classes={styles.arrowLeftBtn}
                    aria-label="show previous day tasks button"
                    onClick={decrement}
                  >
                    <SvgComponent
                      name="arrow-left"
                      classes={styles.arrowLeftIcon}
                    />
                  </IconButton>
                  <span className={styles.currentSprintPages}>{count}</span>
                  <span className={styles.sprintPages}>
                    /{arrayDate.length}
                  </span>

                  <IconButton
                    classes={styles.arrowRightBtn}
                    aria-label="show next day tasks button"
                    onClick={increment}
                  >
                    <SvgComponent
                      name="arrow-right"
                      classes={styles.arrowRightIcon}
                    />
                  </IconButton>
                </div>
                <span className={styles.sprintDate}>{currentDate}</span>
              </div>
              <form className={styles.searchForm}>
                {/* <IconButton
                  classes={styles.searchBtn}
                  aria-label="search task button"
                >
                  <SvgComponent
                    name="search"
                    classes={styles.searchIcon}
                    type="submit"
                  />
                </IconButton> */}
                <input
                  className={styles.searchSprint}
                  name="filter"
                  type="text"
                  placeholder="Search task"
                  value={filter}
                  onChange={onHandleInputSearch}
                  autoComplete="off"
                ></input>
                <IconButton
                  classes={styles.searchBtn}
                  aria-label="search task button"
                >
                  <SvgComponent
                    name="search"
                    classes={styles.searchIcon}
                    type="submit"
                  />
                </IconButton>
              </form>
            </div>
            <div className={styles.sprintNameContainer}>
              <div className={styles.sprintNameEdit}>
                {showInput ? (
                  <h1 className={styles.sprintName}>
                    {newName || currentSprint.name}
                  </h1>
                ) : (
                  <form onSubmit={onSubmitRenameName}>
                    <input
                      value={newName}
                      name="name"
                      id="name"
                      type="name"
                      onChange={changeInputName}
                      className={styles.sprintNameInput}
                    ></input>
                    <IconButton
                      classes={styles.doneBtn}
                      aria-label="confirm changes"
                      type="submit"
                      onSubmit={onSubmitRenameName}
                    >
                      <SvgComponent name="done" classes={styles.doneIcon} />
                    </IconButton>
                  </form>
                )}
                {showIcon && (
                  <>
                    <IconButton
                      classes={styles.projectBtn}
                      aria-label="edit name button"
                      onClick={changeIcon}
                    >
                      <SvgComponent
                        name="project"
                        classes={styles.projectIcon}
                      />
                    </IconButton>
                  </>
                )}
              </div>

              <div className={styles.createNewBtn}>
                <AddButton onClick={buttonHandlerTask} />
                <span className={styles.createTask}>Create a Task</span>
              </div>
            </div>
            <SprintTable />
          </div>
        </div>
        {createSprint && (
          <SprintModal onCloseModal={btnCloseSprint} projectId={sprintId} />
        )}
        {createTask && (
          <TaskModal onCloseModal={btnCloseTask} projectId={taskId} />
        )}
        {showDiagram && <Diagram onCloseModal={btnCloseDiagram} />}
        {/* Кнопка додати проект */}
        <button
          onClick={buttonHandlerTask}
          type="button"
          aria-label="create new element"
          className={styles.addButton}
        >
          <SvgComponent name="create-btn" classes={styles.addIcon} />
        </button>
        {/* Кнопка аналітки */}
        <IconButton
          classes={styles.analyticsBtn}
          aria-label="open diagram button"
          onClick={buttonHandlerDiagram}
        >
          <SvgComponent name="analytics" classes={styles.analyticsIcon} />
        </IconButton>
      </Container>
    </>
  );
};

export default OneSprintsPage;
