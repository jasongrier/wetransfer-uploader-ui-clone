import React, { ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IState, CIRCUMFERENCE, WIDTH, IProgressCircleRefs } from '../types'

import Summary from './Summary'

interface IProps {
  progressCircleRefs: IProgressCircleRefs | undefined
}

const Label = styled.div`
  font-size: 57px;
  height: ${WIDTH}px;
  left: 50%;
  line-height: ${WIDTH}px;
  margin-left: -${WIDTH / 2}px;
  position: absolute;
  position: absolute;
  top: 25px;
  width: ${WIDTH}px;
  z-index: 3;
`

const Sign = styled.sup`
  font-size: 24px;
  color: #999;
`

/**
 * Displays file upload info
 *
 * @returns ReactElement
 */
export default function Info({ progressCircleRefs }: IProps): ReactElement {
  const { fileCount, recipientsCount, timeRemaining, totalSize, uploadedSize, uploadInProgress } = useSelector(
    (state: IState) => ({
      fileCount: state.fileCount,
      recipientsCount: state.recipientsCount,
      timeRemaining: state.timeRemaining,
      totalSize: state.totalSize,
      uploadedSize: state.uploadedSize,
      uploadInProgress: state.uploadInProgress,
    })
  )

  useEffect(
    function renderProgressDirty() {
      const progressSvgEl = progressCircleRefs?.frameRef.current
      const progressCircleEl = progressCircleRefs?.barRef.current

      if (!progressSvgEl) return
      if (!progressCircleEl) return

      if (uploadInProgress && uploadedSize && totalSize) {
        progressSvgEl.style.opacity = '1'
        progressCircleEl.style.strokeDashoffset = (
          CIRCUMFERENCE -
          (CIRCUMFERENCE * uploadedSize) / totalSize
        ).toString()
      } else {
        progressSvgEl.style.opacity = '0'
      }
    },
    [totalSize, uploadedSize, uploadInProgress]
  )

  if (!uploadInProgress) return <div />

  return (
    <>
      <Label>
        {Math.round((uploadedSize / totalSize) * 100)}
        <Sign>%</Sign>
      </Label>
      <Summary
        fileCount={fileCount}
        recipientsCount={recipientsCount}
        timeRemaining={timeRemaining}
        totalSize={totalSize}
        uploadedSize={uploadedSize}
      />
    </>
  )
}
