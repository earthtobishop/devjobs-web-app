import React, { FC, ReactElement } from 'react'
import Link from 'next/link'
import { Job } from '../../../lib/job-util'
import styled from 'styled-components'

interface JobCardProps {
  job: Job
}
const Card = styled.div`
  height: 253px;
  width: 327px;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media only screen and (min-width: 768px) {
    height: 253px;
    width: 339px;
  }

  @media only screen and (min-width: 1440px) {
    height: 228px;
    width: 350px;
  }
`

interface IconProps {
  logo: string
  backgroundColor: string
}

const Icon = styled.div<IconProps>`
  background-image: url(${(props) => props.logo});
  background-color: ${(props) => props.backgroundColor};
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 17px;
  height: 50px;
  width: 50px;
  position: absolute;
  top: -16px;
  left: 16px;
`

const Description = styled.div`
  font-size: 16px;
  color: #6e8098;
  display: flex;
  gap: 15px;
  margin-top: 40px;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  color: #000;
`

const Company = styled.div`
  font-size: 16px;
  color: #6e8098;
  display: flex;
  margin-top: 15px;
`

const Location = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #5964e0;
  display: flex;
  margin-top: 15px;
`

const JobCard: FC<JobCardProps> = (props): ReactElement => {
  const { job } = props

  return (
    <Link href={`/jobs/${job.id}`}>
      <Card>
        <Icon logo={job.logo} backgroundColor={job.logoBackground} />
        <Description>
          <div>{job.postedAt}</div>
          <span>&#183;</span>
          <div>{job.contract}</div>
        </Description>
        <Title>{job.position}</Title>
        <Company>{job.company}</Company>
        <Location>{job.location}</Location>
      </Card>
    </Link>
  )
}

export default JobCard
