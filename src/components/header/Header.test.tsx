import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { screen } from '@testing-library/dom'

import { Header } from './Header';
import { MOCK_FULL_STORE_WITH_ORDERS } from '../../DataTestUtils';


const mockStore = configureStore([thunk]);
const mockState = MOCK_FULL_STORE_WITH_ORDERS
const store = mockStore(mockState);

describe('Header testing', () => {

  it('Render header and validate total value is in header', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(screen.getByText(/392,700/i)).toBeDefined();
  });

})