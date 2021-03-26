import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Button from '../../src/file-uploader/components/Button'

configure({ adapter: new Adapter() })

describe('Button', () => {
  it('renders correctly', () => {
    shallow(<Button onClick={() => {}} primary={true} />)
  })
})
