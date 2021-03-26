import React, { ReactElement, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { cancelUpload, startUpload } from '../actions'
import { IState } from '../types'

import Button from './Button'

const Layout = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  margin-left: -78px;
`

/**
 * It holds the transfer/cancel button
 *
 * @returns ReactElement
 */
export default function Footer(): ReactElement {
  const { uploadInProgress } = useSelector((state: IState) => ({
    uploadInProgress: state.uploadInProgress,
  }))

  const dispatch = useDispatch()

  const buttonOnClick = useCallback(() => {
    dispatch(uploadInProgress ? cancelUpload() : startUpload())
  }, [uploadInProgress])

  return (
    <Layout>
      <Button onClick={buttonOnClick} primary={!uploadInProgress}>
        {uploadInProgress ? 'Cancel' : 'Transfer'}
      </Button>
    </Layout>
  )
}
