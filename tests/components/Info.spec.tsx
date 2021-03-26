import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import { Provider } from 'react-redux'

import { store } from '../../src/file-uploader/store'

import Info from '../../src/file-uploader/components/Info'

configure({ adapter: new Adapter() })

describe('Info', () => {
  it('renders correctly', () => {
    shallow(
      <Provider store={store}>
        <Info progressCircleRefs={undefined} />
      </Provider>
    )
  })
})
