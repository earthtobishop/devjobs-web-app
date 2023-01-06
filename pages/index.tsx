import Head from 'next/head'
import React, { FC, ReactElement, Fragment } from 'react'
import Filter from '../components/home-page/filter/filter'
import styled from 'styled-components'
import { GetStaticProps } from 'next'
import { getAllJobs, Job } from '../lib/job-util'
import JobList from '../components/jobs/job-list/job-list'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`

interface HomePageProps {
  jobs: Job[]
}

const HomePage: FC<HomePageProps> = (props): ReactElement => {
  const { jobs } = props

  return (
    <Fragment>
      <Head>
        <title>Devjobs</title>
        <meta name='description' content='A job board for developers' />
      </Head>
      <Wrapper>
        <Filter />
        <JobList jobs={jobs} />
      </Wrapper>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allJobs = await getAllJobs()

  return {
    props: {
      jobs: allJobs
    }
  }
}

export default HomePage
