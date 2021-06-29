import Loader from 'react-loader-spinner';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <Loader type="ThreeDots" color="#ff6b08" height={80} width={80} />
    </div>
  );
};

export default Spinner;
