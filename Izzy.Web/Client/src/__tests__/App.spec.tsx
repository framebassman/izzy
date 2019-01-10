import * as React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it ('Updates heading on setState', done => {
    const el = shallow(<App />);

    expect(el.find('h3').text()).toBe('');

    el.setState({ result: 'A' }, () => {
        expect(el.update().find('h3.result').text()).toBe('A');
        done();
    });
  });
});
