import React, { useEffect } from 'react';
import HeaderSliders from '../../components/Slider/HeaderSliders';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../store/categorySlice';
import ProductList from '../../components/ProductList/ProductList';
import { fetchAsyncProducts, getAllProductStatus, getAllProducts } from '../../store/ProductSlice';
import Loader from '../../components/Loader/Loader';
import { STATUS } from '../../utils/status'

function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  useEffect(() => {
    dispatch(fetchAsyncProducts(50))
  }, [])
  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductStatus);

  // randomizing the products in the list
  const temp = [];
  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);

      while (temp.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length)
      }
      temp[i] = products[randomIndex]
    }
  }
  // Category
  let catProductOne = products.filter(product => product.category === categories[0])
  let catProductTwo = products.filter(product => product.category === categories[1])
  let catProductThree = products.filter(product => product.category === categories[2])
  let catProductFour = products.filter(product => product.category === categories[3])


  return (
    <div className="flex flex-col">
      <div>
        <HeaderSliders />
      </div>
      <div className="flex items-center justify-center mb-5">
        <div className="bg-white rounded-lg px-10 py-6 shadow-md text-center">
          <h3 className="text-orange-500 font-bold text-xl uppercase">See Our Products</h3>
        </div>
      </div>
      {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={temp} />}

      {/* Sort by Category */}
      <div className="flex items-center justify-center mb-5">
        <div className="bg-white rounded-lg px-10 py-6 shadow-md text-center">
          <h3 className="text-orange-500 font-bold text-xl uppercase">{categories[0]}</h3>
          {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductOne} />}
        </div>
      </div>

      <div className="flex items-center justify-center mb-5">
        <div className="bg-white rounded-lg px-10 py-6 shadow-md text-center">
          <h3 className="text-orange-500 font-bold text-xl uppercase">{categories[1]}</h3>
          {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductTwo} />}
        </div>
      </div>

      <div className="flex items-center justify-center mb-5">
        <div className="bg-white rounded-lg px-10 py-6 shadow-md text-center">
          <h3 className="text-orange-500 font-bold text-xl uppercase">{categories[2]}</h3>
          {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductThree} />}
        </div>
      </div>

      <div className="flex items-center justify-center mb-5">
        <div className="bg-white rounded-lg px-10 py-6 shadow-md text-center">
          <h3 className="text-orange-500 font-bold text-xl uppercase">{categories[3]}</h3>
          {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductFour} />}
        </div>
      </div>
    </div>
  )
}

export default HomePage