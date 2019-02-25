import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({
  link,
  color,
  size,
  children,
  className,
  ...props
}) => (link
  ? (
    <a target="_blank" className={`Button -size-${size} -color-${color} ${className}`} {...props}>
      {children}
    </a>
  )
  : (
    <div className={`Button -size-${size} -color-${color} ${className}`} {...props}>
      {children}
    </div>
  ));

Button.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  color: 'pink',
  className: '',
  size: 'default',
};

export default Button;
