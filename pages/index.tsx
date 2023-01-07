import Head from 'next/head'
import React, { FC, ReactElement, Fragment, useState } from 'react'
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

const search = (items: Job[], text: string, isChecked: boolean) => {
  if (isChecked) {
    return items.filter((item) => {
      return (
        (item.position.toLowerCase().includes(text.toLowerCase()) ||
          item.company.toLowerCase().includes(text.toLowerCase()) ||
          item.location.toLowerCase().includes(text.toLowerCase())) &&
        item.contract === 'Full Time'
      )
    })
  } else {
    return items.filter((item) => {
      return (
        item.position.toLowerCase().includes(text.toLowerCase()) ||
        item.company.toLowerCase().includes(text.toLowerCase()) ||
        item.location.toLowerCase().includes(text.toLowerCase())
      )
    })
  }
}

const HomePage: FC<HomePageProps> = (props): ReactElement => {
  const [searchText, setSearchText] = useState('')
  const [fullTimeChecked, setFullTimeChecked] = useState(false)

  const { jobs } = props

  const handleChange = () => {
    setFullTimeChecked(!fullTimeChecked)
  }

  const filteredJobs = search(jobs, searchText, fullTimeChecked)

  return (
    <Fragment>
      <Head>
        <title>Devjobs</title>
        <meta name='description' content='A job board for developers' />
      </Head>
      <Wrapper>
        <Filter
          searchText={searchText}
          setSearchText={setSearchText}
          handleChange={handleChange}
        />
        <JobList jobs={filteredJobs} />
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
