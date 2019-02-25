import React from 'react';

import './Description.scss';

const Description = ({
  children,
  className,
  ...props
}) => (
  <p className={`Description ${className}`} {...props}>
    {children}
  </p>
);


export default Description;
