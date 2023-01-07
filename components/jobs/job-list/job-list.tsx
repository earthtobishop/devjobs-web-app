import React, { FC, ReactElement } from 'react'
import { Job } from '../../../lib/job-util'
import styled from 'styled-components'
import JobCard from './job-card'

interface JobListProps {
  jobs: Job[]
}
const List = styled.section`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    display: grid;
    flex: none;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media only screen and (min-width: 1440px) {
    flex: none;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const JobList: FC<JobListProps> = (props): ReactElement => {
  const { jobs } = props

  console.log(jobs)

  return (
    <List>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </List>
  )
}

export default JobList
