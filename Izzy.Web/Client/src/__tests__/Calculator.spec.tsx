import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import Calculator from '../components/Calculator';
import { calculateUrl } from '../store/Calculator/urls';

const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);

describe('<Calculator />', () => {
  let calculator: ReactWrapper;

  beforeEach(() => {
    calculator = mount(
        <Provider store={store}>
          <Calculator/>
        </Provider>
    );
  });

  it ('Add 1 person after click on Add button', done => {
    // Arrange
    const personsBefore = calculator.find('.person').length;

    // Act
    const addButton = calculator.find('#add').hostNodes();
    addButton.simulate('click');

    // Assert
    const personsAfter = calculator.find('.person').length;
    expect(personsAfter - personsBefore).toEqual(1);
    done();
  });

  it('Get transfers from backend', done => {
    // Arrange

    // Act
    
    // Assert
    done();
  });
});
