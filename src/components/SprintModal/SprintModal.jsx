import styles from './SprintModal.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import Calendar from '../Calendar';
import ModalBackdrop from '../ModalBackdrop';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import { sprintsOperations } from '../../redux/sprints';

const SprintModal = ({ onCloseModal, projectId }) => {
  const [currentTime, setcurrentTime] = useState(new Date());
  const [sprintName, setSprintName] = useState('');
  const [duration, setDuration] = useState('');
  const [checkBox, setCheckBox] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const name = sprintName;

    const startTime = new Date();
    const endTime = new Date();

    if (checkBox) {
      const endTime = currentTime;
      startTime.setDate(endTime.getDate() - Number(duration));
    } else {
      const startTime = currentTime;
      endTime.setDate(startTime.getDate() + Number(duration));
    }

    const startDate = startTime.toString().slice(4, 15);
    const endDate = endTime.toString().slice(4, 15);

    const sprint = { projectId, name, startDate, endDate, duration };
    dispatch(sprintsOperations.addSprint(sprint));

    onCloseModal();
  };

  return (
    <ModalBackdrop onClose={onCloseModal}>
      <div className={styles.modal}>
        <form onSubmit={handleSubmit}>
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
          <label
            className={styles.labelRadio}
            onClick={() => {
              if (checkBox) setCheckBox(false);
              else setCheckBox(true);
            }}
          >
            <div className={styles.roud}>
              {checkBox && (
                <SvgComponent name="circle" classes={styles.circleIcon} />
              )}
            </div>
            Previous days
          </label>
          {/* Время */}
          {(checkBox && <span className={styles.endDate}>End date</span>) || (
            <span className={styles.endDate}>Start date</span>
          )}

          <div className={styles.dataAndDay}>
            <div className={styles.calendar}>
              {Calendar(currentTime, setcurrentTime)}
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
            <Button type="submit" text="Ready" />
            <button className={styles.cancelBtn} onClick={onCloseModal}>
              Cancel
            </button>
          </div>
          <IconButton
            classes={styles.closeBtn}
            aria-label="close window"
            onClick={onCloseModal}
          >
            <SvgComponent name="close" classes={styles.closeIcon} />
          </IconButton>
        </form>
      </div>
    </ModalBackdrop>
  );
};

export default SprintModal;
