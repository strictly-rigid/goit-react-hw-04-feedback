import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <ul className={css.btnoptions}>
      {options.map(item => (
        <li key={item}>
          <button
            className={css.optionBtn}
            onClick={() => onLeaveFeedBack(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedBack: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
