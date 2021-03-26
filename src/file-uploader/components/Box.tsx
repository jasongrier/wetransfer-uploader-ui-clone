import React, { PropsWithChildren, ReactElement } from "react";
import styled from "styled-components";

/**
 * The file uploader's frame
 *
 * @returns ReactElement
 */
export default function FileUploader({ children }: PropsWithChildren<{}>): ReactElement {
  const Box = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 10%), 0 10px 30px 0 rgb(0 0 0 / 20%);
    height: 25.625em;
    left: 5em;
    margin: -12.8125em 0 0;
    position: absolute;
    text-align: center;
    top: 50%;
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    width: 17.5em;
    z-index: 30;
  `;

  return <Box>{children}</Box>;
}
