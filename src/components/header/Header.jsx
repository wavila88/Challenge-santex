import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { formatCurrency } from '../utils-component/utils';
import { useStateWithStorage } from '../hooks/useStateWithStorage';
import { INITIAL_STATE } from '../../store/products/productsReducer';
import './Header.css'

export function Header() {
  const productStore= useSelector(state => state.ProductsReducer);
  const [objectProducts, setObjectProducts] = useStateWithStorage(INITIAL_STATE);

  useEffect(() => {
    setObjectProducts(productStore);
  },[productStore]);

  return (
    <header >
      <div className={'header-container'}>
        <div className={'header-container-img'}>
          <img
            src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
            alt="logo"
            width='200'
          />
        </div>
      </div>
      <div className={'header-summary-container'}>
        <div className={'header-summary-text'}>
          {`Valor total compra: ${formatCurrency(objectProducts?.amountCart)}`}
        </div>
      </div>
    </header>
  );
}
