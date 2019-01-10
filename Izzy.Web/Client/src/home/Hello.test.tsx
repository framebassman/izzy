import * as React from 'react';
import { shallow } from 'enzyme';

import Hello from './Hello';

describe('<Hello />', () => {
  it ('Updates heading on setState', done => {
    const el = shallow(<Hello />);

    expect(el.find('h3').text()).toBe('');

    el.setState({ result: 'A' }, () => {
        expect(el.update().find('h3.result').text()).toBe('A');
        done();
    });
  });
});
