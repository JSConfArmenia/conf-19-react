import React from 'react';

import './Job.scss';

const Job = ({ title, company, url }) => (
  <div className="Job col-xl-4 col-lg-4 col-md-6 col-sm-6 p-2">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="Job-Title">
        {title}
      </div>
      <div className="Job-Company">
        {company}
      </div>
    </a>
  </div>
);

export default Job;
