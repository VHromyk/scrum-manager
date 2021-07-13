import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../Button';
import Calendar from '../Calendar';
import ModalBackdrop from '../ModalBackdrop';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import { sprintsOperations } from '../../redux/sprints';
import styles from './SprintModal.module.scss';

const SprintModal = ({ onCloseModal }) => {
  const [currentTime, setcurrentTime] = useState(new Date());
  const [sprintName, setSprintName] = useState('');
  const [duration, setDuration] = useState('');
  const [checkBox, setCheckBox] = useState(true);

  const [validName, setValidName] = useState('valid');
  const [validDuration, setValidDuration] = useState('valid');

  const dispatch = useDispatch();
  const { projectId } = useParams();

  const handleSubmit = e => {
    e.preventDefault();

    const name = sprintName;

    const startTime = new Date();
    const endTime = new Date();

    const nameLengthLimits = name.length >= 4 && name.length <= 30;

    let durationNumber = Number(duration);
    let expression = /^\d+/;

    if (!name) {
      setValidName('invalid');
      return;
    } else if (!nameLengthLimits) {
      setValidName('invalidLength');
      return;
    } else {
      setValidName('valid');
    }

    if (!duration) {
      setValidDuration('invalid');
      return;
    } else if (
      durationNumber === 0 ||
      Number.isInteger(durationNumber) === false ||
      expression.test(durationNumber) === false
    ) {
      setValidDuration('invalidNumber');
      return;
    } else {
      setValidDuration('valid');
    }

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

          <div className={styles.containerInput1}>
            <input
              className={styles.sprintName}
              type="text"
              name="sprintName"
              onChange={e => setSprintName(e.target.value)}
              value={sprintName}
              autoComplete="off"
              placeholder="The name of the sprint"
            />
            {validName === 'invalid' && (
              <p className={styles.helper}>*This field is required</p>
            )}
            {validName === 'invalidLength' && (
              <p
                className={styles.helper}
              >{`*Enter name between 4 and 30 characters long. Current length is ${sprintName.length} characters`}</p>
            )}
          </div>

          <label
            className={styles.labelRadio}
            onClick={() => {
              checkBox ? setCheckBox(false) : setCheckBox(true);
            }}
          >
            <div className={styles.round}>
              {checkBox && (
                <SvgComponent name="circle" classes={styles.circleIcon} />
              )}
            </div>
            Previous days
          </label>

          {/* Время */}
          {(checkBox && <p className={styles.endDate}>End date</p>) || (
            <p className={styles.endDate}>Start date</p>
          )}

          <div className={styles.dataAndDay}>
            <div className={styles.buttonInputData}>
              <div className={styles.calendar}>
                {Calendar(currentTime, setcurrentTime)}

                <div className={styles.line}></div>
              </div>

              {/* <div className={styles.smallButtons}>
                <IconButton
                  classes={styles.arrowUpBtn}
                  aria-label="toggle calendar button"
                  onClick={handleShowCalendar}
                >
                  {showCalendar ? (
                    <SvgComponent
                      name="arrow-up"
                      classes={styles.arrowUpIcon}
                    />
                  ) : (
                    <SvgComponent
                      name="arrow-down"
                      classes={styles.arrowDownIcon}
                    />
                  )}
                </IconButton>
              </div> */}
            </div>
            <div className={styles.containerInput2}>
              <input
                className={styles.sprintDuration}
                type="text"
                // name="Duration"
                onChange={e => setDuration(e.target.value)}
                value={duration}
                min="0"
                autoComplete="off"
                placeholder="Duration"
              />
              {validDuration === 'invalid' && (
                <p className={styles.helper2}>*This field is required</p>
              )}
              {validDuration === 'invalidNumber' && (
                <p
                  className={styles.helper2}
                >{`*Please enter an integer greater than 0`}</p>
              )}
            </div>
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
