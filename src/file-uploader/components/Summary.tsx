import React, { ReactElement } from "react";
import styled from "styled-components";

import { formatFileSize } from "../helpers";

interface IProps {
  fileCount: number;
  recipientsCount: number;
  timeRemaining: number;
  totalSize: number;
  uploadedSize: number;
}

/**
 * It holds the button and the dial
 *
 * @returns ReactElement
 */
export default function Summary({
  fileCount,
  recipientsCount,
  timeRemaining,
  totalSize,
  uploadedSize,
}: IProps): ReactElement {
  const InfoInner = styled.div`
    font-size: 16px;
    font-weight: 100;
    line-height: 22px;
    margin-top: 230px;
    text-align: center;
  `;

  const InfoHeader = styled.h5`
    font-size: 24px;
    font-weight: 100;
    margin: 20px 0 5px 0;
    padding: 0;
  `;

  return (
    <InfoInner>
      <InfoHeader>Transferring&hellip;</InfoHeader>
      Sending {fileCount} files to {recipientsCount} recipients
      <br />
      {formatFileSize(uploadedSize)} of {formatFileSize(totalSize)} uploaded
      <br />
      {Math.round(timeRemaining)} minutes remaining
      <br />
    </InfoInner>
  );
}
