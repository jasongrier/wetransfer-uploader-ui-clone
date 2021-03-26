import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Info from '../../src/file-uploader/components/Info'

configure({ adapter: new Adapter() })

describe('Info', () => {
  it('renders correctly', () => {
    shallow(<Info barRef={undefined} />)
  })
})
