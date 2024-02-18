import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSideBarStatus, setSideBarOn } from '../../store/sidebarSlice'

function Navbar() {
  const dispatch = useDispatch();
  // const temp = useSelector(getSideBarStatus);
  // console.log(temp)
  return (
    <nav className=' flex'>
      <div className=' flex items-center'>
        <button type='button' onClick={() => dispatch(setSideBarOn())}>
          <i className="fas fa-bars"></i>
        </button>
        <Link to="/" className=" items-center p-5">
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

      <ul className=" items-center">

      </ul>

      <div className=" text-center flex p-5 my-2">
        <div>
          <Link to="/cart" className=" items-center p-5">
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar