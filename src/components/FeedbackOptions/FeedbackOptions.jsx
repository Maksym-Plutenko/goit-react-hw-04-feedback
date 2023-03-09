import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <ul className={css.list}>
    <li className={css.item}>
      <button className={css.button} onClick={onLeaveFeedback}>
        Good
      </button>
    </li>
    <li className={css.item}>
      <button className={css.button} onClick={onLeaveFeedback}>
        Neutral
      </button>
    </li>
    <li className={css.item}>
      <button className={css.button} onClick={onLeaveFeedback}>
        Bad
      </button>
    </li>
  </ul>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
