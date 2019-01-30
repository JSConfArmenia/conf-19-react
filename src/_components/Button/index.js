import React from 'react';
import './styles.scss';

const Button = ({
  link,
  color,
  className,
  ...props
}) => (link
  ? (
    <a className={`button ${color} ${className}`} {...props} />
  )
  : (
    <div className={`button ${color} ${className}`} {...props} />
  ));

export default Button;
