import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { sprintsOperations, sprintsSelectors } from '../../redux/sprints';

import SprintModal from '../../components/SprintModal';
import AddButton from '../../components/AddButton';
import IconButton from '../../components/IconButton';
import SvgComponent from '../../components/SvgComponent';
import styles from './OneSprintsPage.module.scss';
import Container from '../../components/Container';
import Aside from '../../components/Aside';
import AsideListSprint from '../../components/AsideListSprint';
import SprintTable from '../../components/SprintTable';
import TaskModal from '../../components/TaskModal';

import { useParams } from 'react-router-dom';

const OneSprintsPage = () => {
  const [createSprint, setCreateSprint] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [newName, setNewName] = useState('');
  const [showInput, setShowInput] = useState(true);
  const [showIcon, setShowIcon] = useState(true);
  const { projectId } = useParams();
  const { sprintId } = useParams();
  const { taskId } = useParams();

  const dispatch = useDispatch();

  const sprints = useSelector(sprintsSelectors.getAllSprints);

  const currentSprint = sprints.find(({ id }) => id === sprintId);

  const onRenameSprint = ({ projectId, sprintId, newName }) =>
    dispatch(sprintsOperations.renameSprint({ projectId, sprintId, newName }));

  const buttonHandler = () => {
    setCreateSprint(true);
  };

  const buttonHandlerTask = () => {
    setAddTask(true);
  };
  const btnCloseSprint = () => {
    setCreateSprint(false);
  };

  const btnCloseTask = () => {
    setAddTask(false);
  };
  const changeIcon = () => {
    setShowIcon(false);
    setShowInput(false);
  };

  const changeInputName = e => {
    setNewName(e.target.value);
  };
  const onSubmitRenameName = e => {
    e.preventDefault();
    onRenameSprint(projectId, sprintId, newName);
    setShowInput(true);
    setShowIcon(true);
  };
  return (
    <>
      <Container>
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
                <IconButton
                  classes={styles.arrowLeftBtn}
                  aria-label="show previous day tasks button"
                >
                  <SvgComponent
                    name="arrow-left"
                    classes={styles.arrowLeftIcon}
                  />
                </IconButton>
                <span className={styles.currentSprintPages}>10</span>
                <span className={styles.sprintPages}>/12</span>

                <IconButton
                  classes={styles.arrowRightBtn}
                  aria-label="show next day tasks button"
                >
                  <SvgComponent
                    name="arrow-right"
                    classes={styles.arrowRightIcon}
                  />
                </IconButton>
                <span className={styles.sprintDate}>08.08.2021</span>
              </div>
              <form className={styles.searchForm}>
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
                <input className={styles.searchSprint} type="search"></input>
              </form>
            </div>
            <div className={styles.sprintNameContainer}>
              <div className={styles.sprintNameEdit}>
                {showInput ? (
                  <h1 className={styles.sprintName}>{currentSprint.name}</h1>
                ) : (
                  <form onSubmit={onSubmitRenameName}>
                    <input
                      value={newName}
                      name="name"
                      id="name"
                      type="name"
                      onChange={changeInputName}
                    ></input>
                    <button onSubmit={onSubmitRenameName}></button>
                  </form>
                )}
                )
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
            <button
              type="button"
              aria-label="create new element"
              className={styles.addButton}
            >
              <SvgComponent name="create-btn" classes={styles.addIcon} />
            </button>
            <IconButton
              classes={styles.analyticsBtn}
              aria-label="open diagram button"
            >
              <SvgComponent name="analytics" classes={styles.analyticsIcon} />
            </IconButton>
          </div>
        </div>
        {createSprint && (
          <SprintModal onCloseModal={btnCloseSprint} projectId={projectId} />
        )}
        {addTask && (
          <TaskModal onCloseModal={btnCloseTask} projectId={taskId} />
        )}
      </Container>
    </>
  );
};
export default OneSprintsPage;
