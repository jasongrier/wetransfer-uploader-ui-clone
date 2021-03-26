import React, { StrictMode, ReactElement, useState, MutableRefObject } from "react"
import { Provider } from "react-redux"

import { store } from "../store"

import Box from "./Box"
import Info from "./Info"
import File from "./File"
import Footer from "./Footer"
import ProgressCircle from "./ProgressCircle"

export default (): ReactElement => {
  const [barRef, setBarRef] = useState<MutableRefObject<SVGCircleElement | null>>()

  return (
    <StrictMode>
      <Box>
        <Provider store={store}>
          <File />
          <Info barRef={barRef} />
          <Footer />
        </Provider>
        <ProgressCircle getRef={(barRef) => setBarRef(barRef)} />
      </Box>
    </StrictMode>
  )
}
