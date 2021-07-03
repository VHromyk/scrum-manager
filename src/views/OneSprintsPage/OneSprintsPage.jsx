import React from 'react';
import PropTypes from 'prop-types';
import AddButton from '../../components/AddButton';
import IconButton from '../../components/IconButton';
import SvgComponent from '../../components/SvgComponent';
import styles from './OneSprintsPage.module.scss';
import Container from '../../components/Container';
import Aside from '../../components/Aside';
import AsideListSprint from '../../components/AsideListSprint';
import SprintTable from '../../components/SprintTable';

const OneSprintsPage = () => {
  return (
    <>
      <Container>
        <div className={styles.sprintsWrapper}>
          <Aside
            createName="Create a project"
            showName="Show sprints"
            // onClick={buttonHandler}
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
                <h1 className={styles.sprintName}>Sprint Burndown Chart 1</h1>
                <IconButton
                  classes={styles.projectBtn}
                  aria-label="edit name button"
                >
                  <SvgComponent name="project" classes={styles.projectIcon} />
                </IconButton>
              </div>
              <div className={styles.createNewBtn}>
                <AddButton />
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
      </Container>
    </>
  );
};
export default OneSprintsPage;
