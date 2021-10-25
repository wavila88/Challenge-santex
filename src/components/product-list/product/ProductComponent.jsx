import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToOrderAction, ADD_CART, callAnyAction } from '../../../store/products/productsAction';
import { formatCurrency } from '../../utils-component/utils';
import './ProductComponent.css';

export const ProductComponent = ({ variant, product }) => {
  const dispatch = useDispatch();
  const [isCartSelected, setIsCartSelected] = useState(false);
  return (
    <>
      <div className="card text-center">
        <a>
          <div className="card-header">
            {product.name}
          </div>
          <img className="card-img-top"
            src={product.featuredAsset.source}
            alt="Card image" />
        </a>
        <div className="card-body">

          <a>
            <div className="card-title">
              <h5 >{variant.name}</h5>
            </div>
          </a>
          <div className="card-footer">
            {formatCurrency(variant.price)}
          </div>

          <a href="#"  >
            {isCartSelected ?

              <p onClick={() => {
                alert('create funtion to remove from cart');
              }}
                className="card-text text-remove">Remove from cart
              </p>

              :
              <p data-testid={`${variant.name}-id`} onClick={() => {
                dispatch(addItemToOrderAction(variant))
                setIsCartSelected(true);
              }}
                className="card-text text-muted">Add to cart
              </p>
            }

          </a>
        </div>

      </div>
    </>
  );
};