import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li className={css.item}>
      <p>Good: {good}</p>
    </li>
    <li className={css.item}>
      <p>Neutral: {neutral}</p>
    </li>
    <li className={css.item}>
      <p>Bad: {bad}</p>
    </li>
    <li className={css.item}>
      <p>Total: {total}</p>
    </li>
    <li className={css.item}>
      <p>Positive feedback: {positivePercentage} %</p>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export { Statistics };
