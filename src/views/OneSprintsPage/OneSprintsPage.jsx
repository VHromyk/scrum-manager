import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useMedia } from 'react-use';
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
import EditNameForm from '../../components/EditNameForm';
import SprintTable from '../../components/SprintTable';
import TaskModal from '../../components/TaskModal';
import Diagram from '../../components/Diagram';
import ModalBackdrop from '../../components/ModalBackdrop';
import styles from './OneSprintsPage.module.scss';

const OneSprintsPage = () => {
  const [createSprint, setCreateSprint] = useState(false);
  const [createTask, setCreateTask] = useState(false);

  const [showDiagram, setShowDiagram] = useState(false);
  const [count, setCount] = useState(Number(1));

  const { projectId, sprintId } = useParams();
  const { taskId } = useParams(); // undefined
  const [idSprint, setIdSprint] = useState(sprintId);
  const [changeArray, setChangeArray] = useState(false);
  const [changeDate, setChangeDate] = useState(false);

  const sprints = useSelector(sprintsSelectors.getAllSprints);
  const [currentSprint, setCurrentSprint] = useState(
    sprints.find(({ id }) => id === idSprint),
  );
  const dispatch = useDispatch();

  const filter = useSelector(tasksSelectors.getFilter);

  if (idSprint !== sprintId) {
    setIdSprint(sprintId);
  }
  if (idSprint !== currentSprint.id) {
    const sp = sprints.find(({ id }) => id === idSprint);
    setCurrentSprint(sp);
    setChangeArray(true);
  }

  const doArrayOfDate = (startDate, endDate) => {
    console.log('mount One sprintPage');
    let start = new Date(startDate),
      end = new Date(endDate),
      array = [];

    for (let q = start; q <= end; q.setDate(q.getDate() + 1)) {
      array.push(q.toLocaleDateString());
    }
    return array;
  };

  const [arrayDate, setArrayDate] = useState(
    doArrayOfDate(currentSprint.startDate, currentSprint.endDate),
  );
  const [currentDate, setCurrentDate] = useState(arrayDate[0]);

  if (changeArray) {
    setArrayDate(doArrayOfDate(currentSprint.startDate, currentSprint.endDate));
    setChangeArray(false);
    setChangeDate(true);
  }
  if (changeDate) {
    setCurrentDate(arrayDate[0]);
    setChangeDate(false);
  }

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
    if (currentIndex === 0) {
      return;
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

  // const currentTask = tasks.find(({ id }) => id === sprintId);

  // Зміна назви спринта
  const onRenameSprint = newName =>
    dispatch(sprintsOperations.renameSprint({ projectId, sprintId, newName }));

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

  const isWide = useMedia('(min-width: 768px)');

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
                  {/* Стрелка влево */}
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
                  {/* Стрелка вправо */}

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
              <EditNameForm
                currentName={currentSprint.name}
                onChangeName={onRenameSprint}
              />
              {isWide && (
                <div className={styles.createTaskBtn}>
                  <AddButton onClick={buttonHandlerTask} />
                  <p className={styles.createTaskTitle}>Create a task</p>
                </div>
              )}
            </div>
            <SprintTable currentDate={currentDate} />
          </div>
        </div>
        {createSprint && (
          <SprintModal onCloseModal={btnCloseSprint} projectId={sprintId} />
        )}
        {createTask && (
          <TaskModal
            onCloseModal={btnCloseTask}
            projectId={taskId}
            dateTask={currentDate}
          />
        )}
        {showDiagram && (
          <ModalBackdrop onClose={btnCloseDiagram} styles="overflowX: scroll">
            <Diagram
              duration={currentSprint.duration}
              currentDate={currentDate}
              arrayOfDate={() =>
                doArrayOfDate(currentSprint.startDate, currentSprint.endDate)
              }
            />
          </ModalBackdrop>
        )}
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
