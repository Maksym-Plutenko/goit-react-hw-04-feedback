import PropTypes from 'prop-types';

import css from './Section.module.css';

const Section = ({ title, children }) => (
  <>
    <h2 className={css.title}>{title}</h2>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export { Section };
