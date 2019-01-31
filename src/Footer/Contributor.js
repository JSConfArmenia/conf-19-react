import React from 'react';

const Contributor = ({ name, url }) => (
  <a
    className="link"
    rel="noopener noreferrer"
    target="_blank"
    href={url || `https://github.com/${name}`}
  >
    {!url && '@'}
    {name}
  </a>
);

export default Contributor;
