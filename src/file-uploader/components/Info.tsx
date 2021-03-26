import React, { ReactElement, useEffect, MutableRefObject } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { IState, CIRCUMFERENCE, WIDTH } from "../types";

import Summary from "./Summary";

interface IProps {
  barRef: MutableRefObject<SVGCircleElement | null> | undefined;
}

/**
 * Displays file upload info
 *
 * @returns ReactElement
 */
export default function FileUploaderContainer({ barRef }: IProps): ReactElement {
  const { fileCount, recipientsCount, timeRemaining, totalSize, uploadedSize, uploadInProgress } = useSelector(
    (state: IState) => ({
      fileCount: state.fileCount,
      recipientsCount: state.recipientsCount,
      timeRemaining: state.timeRemaining,
      totalSize: state.totalSize,
      uploadedSize: state.uploadedSize,
      uploadInProgress: state.uploadInProgress,
    })
  );

  useEffect(
    function renderProgressDirty() {
      const progressCircleEl = barRef?.current;

      if (!progressCircleEl) return;

      if (uploadInProgress && uploadedSize && totalSize) {
        progressCircleEl.style.opacity = "1";
        progressCircleEl.style.strokeDashoffset = (
          CIRCUMFERENCE -
          (CIRCUMFERENCE * uploadedSize) / totalSize
        ).toString();
      } else {
        progressCircleEl.style.opacity = "0";
      }
    },
    [totalSize, uploadedSize, uploadInProgress]
  );

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
  `;

  const Sign = styled.sup`
    font-size: 24px;
    color: #999;
  `;

  return (
    <div>
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
    </div>
  );
}
