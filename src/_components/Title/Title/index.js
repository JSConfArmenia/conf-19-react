import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Title = ({ className, ...props }) => (
  <h1 className={`title ${className}`} {...props} />
);

Title.propTypes = {
  className: PropTypes.string,
};

Title.defaultProps = {
  className: '',
};

export default Title;
