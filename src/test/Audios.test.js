import { describe, it } from 'mocha'
import React from 'react'
import { mount, shallow } from 'enzyme'
import expect from 'expect'

import Audios from '../components/Audios'

const wrapper = shallow(<Audios />)

describe('Audios Component', () => {
  it("it renders", () => {
    expect(wrapper.length).toEqual(1)
  })
  it("it includes Link", () => {
    expect(wrapper.find('AudiosContainer').length).toEqual(1)
  })
  it("Link prop should go to /", () => {
    expect(wrapper.find('Link').prop('to')).toEqual("/")
  })
})
