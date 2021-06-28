import PropTypes from 'prop-types';
import Icons from '../../images/sprite.svg'; // Path to your icons.svg

const SvgComponent = ({ name, classes }) => {
  return (
    <svg className={classes}>
      <use xlinkHref={`${Icons}#${name}`} />
    </svg>
  );
};

SvgComponent.defaultProps = {
  classes: '',
};

SvgComponent.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SvgComponent;
