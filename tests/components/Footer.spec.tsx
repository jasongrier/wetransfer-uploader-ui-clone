import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Footer from '../../src/file-uploader/components/Footer'

configure({ adapter: new Adapter() })

describe('Footer', () => {
  it('renders correctly', () => {
    shallow(<Footer />)
  })
})
