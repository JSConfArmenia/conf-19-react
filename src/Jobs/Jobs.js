import React from 'react';

import Title, { TitleAccent } from '../_components/Title';
import JobList from './JobList';
import Job from './Job/Job';

import './Jobs.scss';

const Jobs = () => {
  const jobList = JobList.map(job => (
    <Job
      key={job.title + job.company}
      url={job.url}
      title={job.title}
      company={job.company}
    />
  ));

  return (
    <section id="jobs" className="Jobs">
      <div className="w-100">
        <div className="w-100 BigTitle">
          <Title>
            JS/React
            {' - '}
            <TitleAccent color="primary1">Jobs</TitleAccent>
          </Title>
        </div>
        <div className="container">
          <div className="row JobList">
            {jobList}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
