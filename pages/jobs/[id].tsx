import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { FC, ReactElement } from 'react'
import { getAllJobs, getJob, Job } from '../../lib/job-util'
import styled from 'styled-components'
import { useRouter } from 'next/router'

interface JobPageParams extends ParsedUrlQuery {
  id: string
}

interface JobPageProps {
  job: Job
}

const Card = styled.div`
  height: 1050px;
  width: 327px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 30px;
  padding: 10px;

  @media only screen and (min-width: 768px) {
    height: 1327px;
    width: 689px;
  }

  @media only screen and (min-width: 1440px) {
    height: 1257px;
    width: 730px;
  }
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

const Button = styled.div`
  cursor: pointer;
  background-color: #5964e0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 15px;
  margin-top: 20px;
`

const JobDescription = styled.div`
  font-size: 16px;
  color: #6e8098;
  margin-top: 20px;
`

const RequirementsHeader = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: black;
`

const JobRequirements = styled.div`
  font-size: 16px;
  color: #6e8098;
  margin-top: 20px;
`

const RequirementsList = styled.ul`
  font-size: 16px;
  color: #6e8098;
  margin-top: 20px;
`

const WhatYouWillDoHeader = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: black;
`

const WhatYouWillDoDescription = styled.div`
  font-size: 16px;
  color: #6e8098;
  margin-top: 20px;
`

const JobPage: FC<JobPageProps> = (props): ReactElement => {
  const router = useRouter()
  const { job } = props

  console.log(job)

  return (
    <Card>
      <Description>
        <div>{job.postedAt}</div>
        <span>&#183;</span>
        <div>{job.contract}</div>
        <div style={{ cursor: 'pointer' }} onClick={() => router.push('/')}>
          Go Back
        </div>
      </Description>
      <Title>{job.position}</Title>
      <Company>
        <a href={job.website}>{job.company}</a>
      </Company>
      <Location>{job.location}</Location>
      <Button>Apply Now</Button>
      <JobDescription>{job.description}</JobDescription>
      <RequirementsHeader>Requirements</RequirementsHeader>
      <JobRequirements>{job.requirements.content}</JobRequirements>
      <RequirementsList>
        {job.requirements.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </RequirementsList>
      <WhatYouWillDoHeader>What You Will Do</WhatYouWillDoHeader>
      <WhatYouWillDoDescription>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        esse, numquam laborum consequatur libero odit adipisci, ipsa enim
        repellat sit modi voluptates iste dolorum veniam animi maiores impedit
        recusandae nostrum voluptas fugiat possimus natus perferendis assumenda
        quibusdam! Similique, repellat porro illo dolorum debitis eius cum id
        veritatis quasi veniam fugiat, ipsa ab deleniti, voluptatibus vero totam
        beatae dignissimos perspiciatis at molestias aut dolorem. Incidunt
        numquam non possimus quaerat nihil illum excepturi natus deserunt
        perspiciatis animi autem, at, odio dicta eligendi sapiente modi ipsum,
        cupiditate laboriosam fugiat placeat! Laudantium asperiores, corporis,
        unde impedit veritatis nihil repellendus tempora dignissimos dolorem
        porro dicta.
      </WhatYouWillDoDescription>
    </Card>
  )
}

export const getStaticPaths: GetStaticPaths<JobPageParams> = async () => {
  const jobs = await getAllJobs()
  return {
    paths: jobs.map((job) => ({
      params: { id: job.id.toString() }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const id = params?.id
  const allJobs = await getAllJobs()
  const job = allJobs.find((j) => j.id === Number(id))

  console.log(job)

  return {
    props: { job }
  }
}

export default JobPage
