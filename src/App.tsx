import { Provider } from 'react-redux';
import { Header } from './components/header/Header';
import { ProductList } from './components/product-list/ProductList';
import { store } from './store/reducers/store'; 

function App() {
  return (
    <>
      <Provider store={store}>
        <Header/>
        <div>
          <ProductList/>
        </div>
      </Provider>
    </>
  );
}

export default App;
