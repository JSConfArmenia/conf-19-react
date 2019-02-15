import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({
  link,
  color,
  children,
  className,
  ...props
}) => (link
  ? (
    <a target="_blank" className={`button ${color} ${className}`} {...props}>
      {children}
    </a>
  )
  : (
    <div className={`button ${color} ${className}`} {...props}>
      {children}
    </div>
  ));

Button.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  color: 'pink',
  className: '',
};

export default Button;
