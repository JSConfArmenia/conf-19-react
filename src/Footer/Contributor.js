import React from 'react';

const Contributor = ({ username, url }) => (
  <a
    className="link"
    rel="noopener noreferrer"
    target="_blank"
    href={url || `https://github.com/${username}`}
  >
    {!url && '@'}
    {username}
  </a>
);

export default Contributor;
