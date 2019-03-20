import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Title = ({
  className,
  children,
  size,
  ...props
}) => (
  <h2
    className={`Title -size-${size} ${className}`}
    {...props}
  >
    {children}
  </h2>
);

Title.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
};

Title.defaultProps = {
  className: '',
  size: 'default',
};

export default Title;
