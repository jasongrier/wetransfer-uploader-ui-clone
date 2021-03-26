import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Summary from '../../src/file-uploader/components/Summary'

configure({ adapter: new Adapter() })

describe('Summary', () => {
  it('renders correctly', () => {
    shallow(<Summary fileCount={0} recipientsCount={0} timeRemaining={0} totalSize={0} uploadedSize={0} />)
  })
})
