import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import File from '../../src/file-uploader/components/File'

configure({ adapter: new Adapter() })

describe('File', () => {
  it('renders correctly', () => {
    shallow(<File />)
  })
})
