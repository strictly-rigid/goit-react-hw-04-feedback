import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Notification = ({ message }) => {
  return <p className={css.notification}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
