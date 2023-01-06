import { GetStaticProps } from 'next'
import { FC, ReactElement } from 'react'
import { Job } from '../../lib/job-util'

interface JobProps {
  job: Job
}

const JobPage: FC<JobProps> = (props): ReactElement => {
  const { job } = props

  return <>JobPage</>
}

// export const getStaticProps: GetStaticProps

export default JobPage
