import React, { PropsWithChildren, ReactElement } from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../../lib/styles";

interface IProps {
  onClick: () => void;
  primary: boolean;
}

/**
 * Generic button with a "secondary" state
 *
 * @returns ReactElement
 */
export default function Button({ children, onClick, primary }: PropsWithChildren<IProps>): ReactElement {
  const Button = styled.button<IProps>`
    border-radius: 20px;
    border: 1px solid ${COLORS.WTR_BLUE};
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 156px;

    &:active,
    &:focus {
      outline: none;
    }

    ${({ primary }) =>
      primary
        ? css`
            background-color: ${COLORS.WTR_BLUE};
            color: ${COLORS.WHITE};
          `
        : css`
            background-color: ${COLORS.WHITE};
            color: ${COLORS.WTR_BLUE};
          `}
  `;

  return (
    <Button onClick={onClick} primary={primary}>
      {children}
    </Button>
  );
}
