import * as React from 'react';
import { Provider } from 'react-redux';
import {render, RenderResult, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import moxios from 'moxios';

import configureStore from '../store/configureStore';
import Calculator from '../components/Calculator';
import { calculateUrl } from '../store/Calculator/urls';
import {RandomTransfer} from "../store/model/RandomTransfer";
import {UserEvent} from "@testing-library/user-event/dist/types/setup/setup";

const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);

// https://medium.com/@albert_barsegyan/testing-formik-with-jest-and-testing-library-85649405a31
describe('<Calculator />', () => {
  let component: RenderResult;
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup()
    component = render(
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

  it ('Add 1 person after click on Add button', async () => {
    // Arrange
    const personsBefore = screen.queryByTestId('person')
    expect(personsBefore).not.toBeInTheDocument()

    // Act
    await user.click(screen.getByTestId('add'));

    // Assert
    const personsAfter = screen.getAllByTestId('person');
    expect(personsAfter).toBeInTheDocument()
    expect(personsAfter.length).toEqual(1);
  });

  // it ('one person in form by default', done => {
  //   // Act
  //   const personsCount = component.find('.person').length;
  //
  //   // Assert
  //   expect(personsCount).toEqual(1);
  //   done();
  // });
  //
  // it ('calc button is disabled, if there is one person in form', done => {
  //   // Arrange
  //   const addButton = component.find('#calc').hostNodes();
  //
  //   // Act
  //   addButton.simulate('click');
  //   const personsAfter = component.find('.person').length
  //
  //   // Assert
  //   expect(personsAfter).toEqual(1);
  //   done();
  // });
  //
  // it ('outcomes are displayed after clicking on \'Рассчитать\' button', done => {
  //   // Act
  //   const addButton = component.find('#add').hostNodes();
  //   addButton.simulate('click');
  //
  //   console.log(123)
  //
  //   component.find('#persons_form')
  //     .children()
  //     .find('form')
  //     .simulate('submit', {
  //       preventDefault: () => {} // no op
  //     });
  //
  //   // Assert
  //   moxios.wait(() => {
  //     component.update();
  //     expect(component.find('#transfers').hostNodes().exists())
  //         .toEqual(true);
  //     done();
  //   }, 1000);
  // });
});
