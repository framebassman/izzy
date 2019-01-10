import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';

import App from '../App';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);

describe('<App />', () => {
  let app: ReactWrapper;

  beforeEach(() => {
    app = mount(
      <Provider store={store}>
        <App/>
      </Provider>
    );
  });

  it ('Add 1 person after click on Add button', done => {
    // Arrange
    const personsBefore = app.find('.person').length;

    // Act
    const addButton = app.find('#add').hostNodes();
    addButton.simulate('click');

    // Assert
    const personsAfter = app.find('.person').length;
    expect(personsAfter - personsBefore).toEqual(1);
    done();
  });
});
