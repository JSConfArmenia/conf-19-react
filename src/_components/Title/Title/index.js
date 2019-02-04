import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Title = ({ className, children, ...props }) => (
  <h1 className={`title ${className}`} {...props}>
    {children}
  </h1>
);

Title.propTypes = {
  className: PropTypes.string,
};

Title.defaultProps = {
  className: '',
};

export default Title;
