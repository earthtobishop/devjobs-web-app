import styled from 'styled-components'

export const LocationInput = styled.input`
  visibility: hidden;
  display: none;
  background: transparent;
  width: 33.3%;
  font-family: inherit;
  border: 0;
  outline: 0;

  @media only screen and (min-width: 768px) {
    visibility: visible;
    display: inline-block;
  }

  @media only screen and (min-width: 1440px) {
    visibility: visible;
    display: inline-block;
  }
`
