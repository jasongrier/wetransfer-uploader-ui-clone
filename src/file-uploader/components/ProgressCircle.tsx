import React, { ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";

import { COLORS } from "../../../lib/styles";

import { CENTER, CIRCUMFERENCE, RADIUS, WIDTH, STROKE_WIDTH } from "../types";

interface IProps {
  getRef: (barRef: React.MutableRefObject<SVGCircleElement | null>) => any;
}

/**
 * A progress circle to be used outside Provider so it doesn't re-render
 * Passes its ref so stateful components can manipulate it without causing
 * the styled child components here to re-render.
 *
 * @returns ReactElement
 */
export default function ProgressCircle({ getRef }: IProps): ReactElement {
  const barRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => getRef(barRef), []);

  const Svg = styled.svg`
    position: absolute;
    height: ${WIDTH}px;
    width: ${WIDTH}px;
    top: 30px;
    margin-left: -${WIDTH / 2}px;
    z-index: 2;
  `;

  const Track = styled.circle`
    fill: none;
    stroke-dasharray: ${CIRCUMFERENCE};
    stroke-dashoffset: 0;
    stroke-width: ${STROKE_WIDTH}px;
    stroke: ${COLORS.WTR_TRACK_GRAY};
  `;

  const Bar = styled.circle`
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-name: spin;
    animation-timing-function: linear;
    fill: none;
    opacity: 0;
    stroke-dasharray: ${CIRCUMFERENCE};
    stroke-dashoffset: 0;
    stroke-linecap: round;
    stroke-width: ${STROKE_WIDTH}px;
    stroke: ${COLORS.WTR_BLUE};
    transform-origin: center;
    transition: stroke-dasharray 250ms;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <Svg viewBox={`0 0 ${WIDTH} ${WIDTH}`}>
      <Track cx={CENTER} cy={CENTER} r={RADIUS} />
      <Bar cx={CENTER} cy={CENTER} ref={barRef} r={RADIUS} />
    </Svg>
  );
}
