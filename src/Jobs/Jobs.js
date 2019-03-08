import React from 'react';

import Title, { TitleAccent } from '../_components/Title';
import JobList from './JobList';
import Job from './Job/Job';

import './Jobs.scss';

const Jobs = () => {
  const jobList = JobList.map(job => (
    <Job
      key={job.title}
      title={job.title}
      company={job.company}
    />
  ));

  return (
    <section id="Jobs" className="Jobs">
      <div className="w-100">
        <div className="w-100 text-center">
          <Title>
            Jobs
            {' - '}
            <TitleAccent color="primary1">Steve</TitleAccent>
            {' '}
            Jobs
          </Title>
        </div>
        <div className="container">
          <div className="row">
            {jobList}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
