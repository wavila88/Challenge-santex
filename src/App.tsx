import { Provider } from 'react-redux';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
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
