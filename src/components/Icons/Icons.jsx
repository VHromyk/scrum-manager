import AddButton from '../AddButton';
import SvgComponent from '../SvgComponent';
import IconButton from '../IconButton';
import styles from './Icons.module.scss';

const Icons = () => (
  <>
    {/* Кнопка створити елемент (білий плюсик на оранжевому фоні) */}
    <AddButton />

    {/* Іконка додати людей */}
    <IconButton classes={styles.addPeopleBtn} aria-label="add people button">
      <SvgComponent name="add-people" classes={styles.addPeopleIcon} />
    </IconButton>

    {/* Кнопка з діаграмою */}
    <IconButton classes={styles.analyticsBtn} aria-label="open diagram button">
      <SvgComponent name="analytics" classes={styles.analyticsIcon} />
    </IconButton>

    {/* Кнопка у вигляді стрілочки (показати проекти) */}
    <IconButton classes={styles.arrowBtn} aria-label="show projects button">
      <SvgComponent name="arrow" classes={styles.arrowIcon} />
    </IconButton>

    {/* Кнопка у вигляді кружечка (Попередні дні на формі створення спринта) */}
    <IconButton
      classes={styles.circleBtn}
      aria-label="show previous days button"
    >
      <SvgComponent name="circle" classes={styles.circleIcon} />
    </IconButton>

    {/* Кнопка закрити вікно створення спринта/задачі/додавання людей */}
    <IconButton classes={styles.closeBtn} aria-label="close window">
      <SvgComponent name="close" classes={styles.closeIcon} />
    </IconButton>

    {/* Кнопка видалити проект (корзинка) */}
    <IconButton
      classes={styles.deleteProjectBtn}
      aria-label="delete project button"
    >
      <SvgComponent name="delete" classes={styles.deleteProjectIcon} />
    </IconButton>

    {/* Кнопка видалити спринт (корзинка) */}
    <IconButton
      classes={styles.deleteSprintBtn}
      aria-label="delete sprint button"
    >
      <SvgComponent name="delete" classes={styles.deleteSprintIcon} />
    </IconButton>

    {/* Маленька стрілка вліво */}
    <IconButton
      classes={styles.arrowLeftBtn}
      aria-label="show previous day tasks button"
    >
      <SvgComponent name="arrow-left" classes={styles.arrowLeftIcon} />
    </IconButton>

    {/* Маленька стрілка вправо */}
    <IconButton
      classes={styles.arrowRightBtn}
      aria-label="show next day tasks button"
    >
      <SvgComponent name="arrow-right" classes={styles.arrowRightIcon} />
    </IconButton>

    {/* Показати календар (стрілка вверх) */}
    <IconButton classes={styles.arrowUpBtn} aria-label="show calendar button">
      <SvgComponent name="arrow-up" classes={styles.arrowUpIcon} />
    </IconButton>

    {/* Сховати календар (стрілка вниз) */}
    <IconButton classes={styles.arrowDownBtn} aria-label="hide calendar button">
      <SvgComponent name="arrow-down" classes={styles.arrowDownIcon} />
    </IconButton>

    {/* Кнопка logout */}
    <IconButton classes={styles.logoutBtn} aria-label="logout button">
      <SvgComponent name="logout" classes={styles.logoutIcon} />
    </IconButton>

    {/* Кнопка змінити назву проекту/спринта */}
    <IconButton classes={styles.projectBtn} aria-label="edit name button">
      <SvgComponent name="project" classes={styles.projectIcon} />
    </IconButton>

    {/* Підтвердити зміну назви проекту/спринта (поля в інпуті) */}
    <IconButton classes={styles.doneBtn} aria-label="confirm changes">
      <SvgComponent name="done" classes={styles.doneIcon} />
    </IconButton>

    {/* Кнопка пошуку завдання (лупа) */}
    <IconButton classes={styles.searchBtn} aria-label="search task button">
      <SvgComponent name="search" classes={styles.searchIcon} />
    </IconButton>

    <IconButton classes={styles.searchBtn} aria-label="show password button">
      <SvgComponent name="show-password" classes={styles.searchIcon} />
    </IconButton>

    <IconButton classes={styles.searchBtn} aria-label="hide password button">
      <SvgComponent name="hide-password" classes={styles.searchIcon} />
    </IconButton>
  </>
);

export default Icons;
