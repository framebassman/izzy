import * as React from 'react';
import { Provider } from 'react-redux';
import {render, RenderResult, screen, waitFor} from '@testing-library/react';
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
    moxios.uninstall()
  });

  it ('Add 1 person after click on Add button', async () => {
    // Arrange
    expect(screen.queryByTestId('person')).toBeInTheDocument()
    expect(screen.queryAllByTestId('person').length).toEqual(1)

    // Act
    user.click(screen.getByTestId('add'));

    // Assert
    await waitFor(() =>
      expect(screen.queryAllByTestId('person').length).toEqual(2)
    );
  });

  it ('one person in form by default', async () => {
    expect(screen.queryByTestId('person')).toBeInTheDocument()
    expect(screen.queryAllByTestId('person').length).toEqual(1)
  });

  it ('calc button is disabled, if there is one person in form', async () => {
    expect(screen.queryByTestId("calc")).toBeDisabled()

    user.click(screen.getByTestId("calc"))

    await waitFor(() =>
      expect(screen.queryAllByTestId('person').length).toEqual(1)
    );
  });

  // it ('outcomes are displayed after clicking on \'Рассчитать\' button', (done) => {
  //   // Act
  //   const addButton = screen.getByTestId('add');
  //   user.click(addButton);
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
  //     expect(screen.queryByTestId('transfers')).toBeInTheDocument();
  //     done();
  //   }, 1000);
  // });
});
