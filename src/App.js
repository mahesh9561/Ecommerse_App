import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CartPages, CategoryProducts, HomePage, ProductSinglePage, SearchPage } from './pages/index';
import { Header, Footer, CartModel, Loader, Navbar, ProductList, Product, Slider, Sidebar } from './components/index'
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Sidebar />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
