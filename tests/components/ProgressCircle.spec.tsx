import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import ProgressCircle from '../../src/file-uploader/components/ProgressCircle'

configure({ adapter: new Adapter() })

describe('ProgressCircle', () => {
  it('renders correctly', () => {
    shallow(<ProgressCircle getRefs={() => {}} />)
  })
})
