import { useSelector } from 'react-redux';
import { formatCurrency } from '../utils-component/utils';
import './Header.css'

export function Header() {

  const totalValue = useSelector(state => state.ProductsReducer.amountCart);
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
          {`Valor total compra: ${formatCurrency(totalValue)}`}
        </div>
      </div>
    </header>
  );
}
