import * as React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount, ReactWrapper } from 'enzyme';
import moxios from 'moxios';

import configureStore from '../store/configureStore';
import Calculator from '../components/Calculator';
import { calculateUrl } from '../store/Calculator/urls';
import {RandomTransfer} from "../store/model/RandomTransfer";

const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);

describe('<Calculator />', () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(
        <Provider store={store}>
          <Calculator/>
        </Provider>
    );
    moxios.install();
    moxios.stubRequest(calculateUrl, {
      status: 200,
      response: [
        new RandomTransfer(),
        new RandomTransfer()
      ]
    });
  });

  afterEach(() => {
    component.unmount();
  });

  it ('Add 1 person after click on Add button', done => {
    // Arrange
    const personsBefore = component.find('.person').length;

    // Act
    const addButton = component.find('#add').hostNodes();
    addButton.simulate('click');

    // Assert
    const personsAfter = component.find('.person').length;
    expect(personsAfter - personsBefore)
        .toEqual(1);
    done();
  });

  it ('outcomes are displayed after clicking on \'Рассчитать\' button', done => {
    // Act
    component.find('#calc').hostNodes().simulate('click');

    // Assert
    moxios.wait(() => {
      component.update();
      expect(component.find('#transfers').exists())
          .toEqual(true);
      done();
    }, 100);
  });
});
