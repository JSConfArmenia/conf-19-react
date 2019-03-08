import React from 'react';

import './Job.scss';

const Job = ({ title, company }) => (
  <div className="Job col-xl-4 col-lg-4 col-md-6 col-sm-6 p-2">
    <div className="Job-Title">
      {title}
    </div>
    <div className="Job-Company">
      {company}
    </div>
  </div>
);

export default Job;
