import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { screen } from '@testing-library/dom'

import { ProductList } from './ProductList';
import { MOCK_FULL_STORE_WITH_ORDERS } from '../../DataTestUtils';
import '@testing-library/jest-dom/extend-expect'


const mockStore = configureStore([thunk]);
const mockState = MOCK_FULL_STORE_WITH_ORDERS
const store = mockStore(mockState);

describe('Product Testing', () => {

  beforeEach(() => {
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
  });

  afterEach(cleanup);

  it('Render product List and validate if one product is on screen', () => {
     expect(screen.getByText(/Tablet 32GB/i)).toBeDefined();
  });

  it('Once view is render no one product is added to cart', () => {
    const button = screen.queryByText('Remove from cart')
    expect(button).not.toBeInTheDocument();
 });

  it('make clic in tablet product, verify viability to remove product from cart', () => {
    const label = screen.getByTestId(/Tablet 32GB-id/i);
    fireEvent.click(label);
    expect(screen.getByText(/Remove from cart/i)).toBeInTheDocument();
  });

})