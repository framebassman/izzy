import * as React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';
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

  it ('one person in form by default', done => {
    // Act
    const personsCount = component.find('.person').length;

    // Assert
    expect(personsCount).toEqual(1);
    done();
  });

  it ('calc button is disabled, if there is one person in form', done => {
    // Arrange
    const addButton = component.find('#calc').hostNodes();

    // Act
    addButton.simulate('click');
    const personsAfter = component.find('.person').length

    // Assert
    expect(personsAfter).toEqual(1);
    done();
  });

  it ('outcomes are displayed after clicking on \'Рассчитать\' button', done => {
    // Act
    const addButton = component.find('#add').hostNodes();
    addButton.simulate('click');

    console.log(123)

    component.find('#persons_form')
      .children()
      .find('form')
      .simulate('submit', {
        preventDefault: () => {} // no op
      });

    // Assert
    moxios.wait(() => {
      component.update();
      expect(component.find('#transfers').hostNodes().exists())
          .toEqual(true);
      done();
    }, 1000);
  });
});
