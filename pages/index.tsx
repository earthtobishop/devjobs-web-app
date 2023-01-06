import Head from 'next/head'
import React, { FC, ReactElement, Fragment } from 'react'
import Filter from '../components/home-page/filter/filter'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`

const HomePage: FC = (): ReactElement => {
  return (
    <Fragment>
      <Head>
        <title>Devjobs</title>
        <meta name='description' content='A job board for developers' />
      </Head>
      <Wrapper>
        <Filter />
      </Wrapper>
    </Fragment>
  )
}

export default HomePage
