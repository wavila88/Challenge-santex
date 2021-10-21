import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductsCatalog } from '../store/products/productsAction';




export function ProductList() {
  const dispatch = useDispatch();
  const listProducts = useSelector(state => state.ProductsReducer.productCatalog);
  debugger;

  useEffect(() => {
    dispatch(getProductsCatalog());
  }, []);

  return <div>List</div>;
}
