import React, { PropsWithChildren, ReactElement } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { COLORS } from '../../lib/styles'
import { FileUploader } from '../file-uploader'

import PlainLogo from './Logo'
import PlainFunButtons from './FunButtons'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Actief Grotesque';
    src: url('ActiefGrotesque_W_Md.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${COLORS.BLACK};
    font-family: Actief Grotesque, sans-serif;
  }
`

const Logo = styled(PlainLogo)`
  position: fixed;
  top: 0;
  left: 0;
`

const FunButtons = styled(PlainFunButtons)`
  position: fixed;
  top: 0;
  left: 0;
`

/**
 * Just a place for us to hang out...
 *
 * @param props PropsWithChildren<{}>
 * @returns ReactElement
 */
export default function App({}: PropsWithChildren<{}>): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <FunButtons />
      <FileUploader />
    </>
  )
}
