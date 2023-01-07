import { useRouter } from 'next/router'
import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background-image: url('/assets/mobile/bg-pattern-header.svg');
  height: 136px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  color: #fff;
  position: static;

  @media only screen and (min-width: 768px) {
    background-image: url('/assets/tablet/bg-pattern-header.svg');
    height: 160px;
  }

  @media only screen and (min-width: 1440px) {
    background-image: url('/assets/desktop/bg-pattern-header.svg');
    height: 160px;
  }
`

const Logo = styled.section`
  background-image: url('/assets/desktop/logo.svg');
  height: 32px;
  width: 115px;
  cursor: pointer;
`

const ThemeSwitchRow = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
`

const LightIcon = styled.section`
  background-image: url('/assets/desktop/icon-sun.svg');
  height: 19px;
  width: 20px;
`

const DarkIcon = styled.section`
  background-image: url('/assets/desktop/icon-moon.svg');
  height: 12px;
  width: 12px;
`

const Switch = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 62px;
  height: 32px;
  display: inline-block;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #fff;
  transition: background-color ease 0.3s;

  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: 2;
    width: 28px;
    height: 28px;
    background: #5964e0;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    font: 10px/28px Helvetica;
    text-transform: uppercase;
    font-weight: bold;
    text-indent: -22px;
    word-spacing: 37px;
    color: #fff;
    text-shadow: -1px -1px rgba(0, 0, 0, 0.15);
    white-space: nowrap;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
  }

  &:checked {
    background-color: #fff;
  }

  &:checked:before {
    left: 32px;
  }
`

const Header: FC = (): ReactElement => {
  const router = useRouter()

  const goHome = () => router.push('/')
  return (
    <Wrapper>
      <Logo onClick={goHome} />
    </Wrapper>
  )
}

export default Header
