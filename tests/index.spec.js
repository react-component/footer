import React from 'react';
import { mount } from 'enzyme';
import Footer from '../index';

describe('rc-footer', () => {
  it('render Footer', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
