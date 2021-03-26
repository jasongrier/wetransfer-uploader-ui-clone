import React, { StrictMode, ReactElement, useState } from 'react'
import { Provider } from 'react-redux'

import { store } from '../store'
import { IProgressCircleRefs } from '../types'

import Box from './Box'
import Info from './Info'
import File from './File'
import Footer from './Footer'
import ProgressCircle from './ProgressCircle'

export default (): ReactElement => {
  const [progressCircleRefs, setProgressCircleRefs] = useState<IProgressCircleRefs>()

  return (
    <StrictMode>
      <Box>
        <Provider store={store}>
          <File />
          <Info progressCircleRefs={progressCircleRefs} />
          <Footer />
        </Provider>
        <ProgressCircle getRef={(refs) => setProgressCircleRefs(refs)} />
      </Box>
    </StrictMode>
  )
}
