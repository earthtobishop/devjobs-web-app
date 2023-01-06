import React, { FC, ReactElement, Fragment } from 'react'
import Header from '../header/header'
import { ILayout } from './interfaces/ILayout'

const Layout: FC<ILayout> = (props): ReactElement => {
  const { children } = props

  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  )
}

export default Layout
