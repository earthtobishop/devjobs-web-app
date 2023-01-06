import Head from 'next/head'
import React, { FC, ReactElement, Fragment } from 'react'

const HomePage: FC = (): ReactElement => {
  return (
    <Fragment>
      <Head>
        <title>Devjobs</title>
        <meta name='description' content='A job board for developers' />
      </Head>
    </Fragment>
  )
}

export default HomePage
