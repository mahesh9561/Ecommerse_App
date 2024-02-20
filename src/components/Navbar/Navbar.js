import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSideBarOn } from '../../store/sidebarSlice'
import { getAllCategories } from '../../store/categorySlice'

function Navbar() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  // console.log(categories)

  return (
    <nav>
      <div className=' flex'>
        <div className=' flex items-center'>
          <button type='button' onClick={() => dispatch(setSideBarOn())}>
            <i className="fas fa-bars"></i>
          </button>
          <Link to="/" className=" items-center p-3">
            <i className="fa-solid fa-bag-shopping"></i>
          </Link>
          <Link to="/" className=" items-center">
            <span className=" text-xl">Snap</span>Up
          </Link>
        </div>

        <div className=" w-full p-5">
          <div className=" items-center bg-white p-2 ml-8 rounded-md shadow-md">
            <div className=" items-center flex">
              <input
                type="text"
                placeholder="Please Enter any Product"
                className=" w-full px-4 text-base"
              />
              <Link to={`search/`} className=" text-black mx-5">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className=" text-center flex p-3 my-2">
          <div>
            <Link to="/cart" className=" items-center p-3">
              <i className="fa-solid fa-cart-shopping text-2xl"></i>
            </Link>
          </div>
        </div>

      </div>
      <div>

        <ul className="flex items-center text-xs font-medium px-2 justify-center pb-4">
          {
            categories.slice(0, 8).map((category, idx) => (
              <li className=' items-center justify-center px-5 ' key={idx}>
                <Link to={`category/${category}`}>{category}</Link>
              </li>
            ))
          }
        </ul>

      </div>
    </nav>
  )
}

export default Navbar