import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Box from '../../src/file-uploader/components/Box'

configure({ adapter: new Adapter() })

describe('Box', () => {
  it('renders correctly', () => {
    shallow(<Box />)
  })
})
