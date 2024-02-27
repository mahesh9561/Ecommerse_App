import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartPages, CategoryProducts, HomePage, ProductSinglePage, SearchPage } from './pages/index';
import { Header, Footer, CartModel, Loader, Navbar, ProductList, Product, Sidebar } from './components/index'
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className='app'>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* Single Page router */}
            <Route path='/product/:id' element={<ProductSinglePage />} />
            {/* Categories listing router */}
            <Route path='/category/:category' element={<CategoryProducts />} />
            {/* Cart */}
            <Route path='/cart' element={<CartPages/>}/>
            {/* search */}
            <Route path='/search/:searchTerm' element={SearchPage}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;
