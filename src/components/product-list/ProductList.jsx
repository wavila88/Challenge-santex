import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsCatalog } from '../../store/products/productsAction';
import { ProductComponent } from '../product-list/product/ProductComponent'
import { LoadingComponent } from '../utils-component/loading-component/LoadingComponent';


export function ProductList() {
  const dispatch = useDispatch();
  const listProducts = useSelector(state => state.ProductsReducer.productCatalog);

  useEffect(() => {
    dispatch(getProductsCatalog());
  }, []);

  const listProductsToPrint = listProducts && listProducts.map(product => {
   return product.variants.map(variant => (
      <ProductComponent variant={variant} product={product}/>
   ));
  });

  return (
    <>
      <div class="container">
        <div class="card-deck">
          {listProducts.length > 0 ? listProductsToPrint : <LoadingComponent/>}
        </div>
      </div>
    </>
  );
}
