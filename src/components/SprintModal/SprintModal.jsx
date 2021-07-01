import styles from './SprintModal.module.scss';
import { useState, useEffect } from 'react';
import Calendar from '../Calendar';
import ModalBackdrop from '../ModalBackdrop';

import SvgComponent from '../SvgComponent';
// import IconButton from '../IconButton';

const SprintModal = (onCloseModal, onSubmit) => {
  // const onCloseModal = () => {
  //   //Написать закрытие модалки
  // };
  // useEffect(() => {
  //   function onKeyup(e) {
  //     if (e.key === 'Escape') {
  //       onCloseModal();
  //     }
  //   }
  //   window.addEventListener('keyup', onKeyup);
  //   return () => window.removeEventListener('keyup', onKeyup);
  // });

  const [time, setTime] = useState(new Date());
  const [sprintName, setSprintName] = useState('');
  const [duration, setDuration] = useState('');
  const [checkBox, setCheckBox] = useState(true);
  return (
    <div className={styles.modal}>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <h2 className={styles.heading}>Creating a sprint</h2>
        <label className={styles.labelInput}>
          <input
            className={styles.sprintName}
            type="text"
            name="sprintName"
            onChange={e => setSprintName(e.target.value)}
            value={sprintName}
            required
          />
          <div className={styles.labelText}>The name of the sprint</div>
        </label>
        {/* <label className={styles.radioLabel}>
          <input className={styles.radioButton} type="radio" checked />
          <span className={styles.radioSpan}></span>
          Previous days
        </label> */}
        <label
          className={styles.labelRadio}
          onClick={() => {
            if (checkBox) setCheckBox(false);
            else setCheckBox(true);
          }}
        >
          {/* <IconButton
            classes={styles.circleBtn}
            aria-label="show previous days button"
          >
            {checkBox && (
              <SvgComponent name="circle" classes={styles.circleIcon} />
            )}
          </IconButton> */}
          <div className={styles.roud}>
            {checkBox && (
              <SvgComponent name="circle" classes={styles.circleIcon} />
            )}
          </div>
          Previous days
        </label>
        {/* Время */}
        <div className={styles.dataAndDay}>
          <div className={styles.calendar}>
            {Calendar(time, setTime)}
            <div className={styles.line}></div>
          </div>

          <label className={styles.labelInput}>
            <input
              className={styles.sprintName}
              type="number"
              name="Duration"
              onChange={e => setDuration(e.target.value)}
              value={duration}
              min="0"
              required
            />
            <div className={styles.labelText}>Duration</div>
          </label>
        </div>
        <div className={styles.buttonDiv}>
          <input type="submit" value="Ready" className={styles.ready} />
          <button
            className={styles.cancel}
            onClick={event => {
              event.preventDefault();
              // onCloseModal();    //Раскоментить когда появится функция
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SprintModal;
