import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSideBarStatus, setSideBarOff } from '../../store/sidebarSlice';
import { fetchAsyncCategories, getAllCategories } from '../../store/categorySlice';
import { Link } from 'react-router-dom';

function Sidebar() {
  const dispatch = useDispatch();
  const isSideBarOn = useSelector(getSideBarStatus);
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories())
  }, [dispatch])
  return (
    <aside
      className={`w-1/4 fixed top-0 left-0 h-full bg-white shadow-md p-8 transform -translate-x-full transition-transform duration-300 z-50 
      ${isSideBarOn ? "translate-x-0" : ""
        }`}
    >
      <button
        type="button"
        className="sidebar-hide-btn absolute right-8 transition ease-in-out hover:text-orange-500"
        onClick={() => dispatch(setSideBarOff())}
      >
        <i className="fas fa-times"></i>
      </button>

      <div className=" ">
        <div className="text-lg uppercase font-semibold tracking-wider pb-4">All Categories</div>
        <ul className="min-h-0 max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-orange scrollbar-track-orange">
          {categories.map((category, idx) => (
            <li className="py-2 pr-4 border-b border-gray-200" key={idx}>
              <Link to={`category/${category}`}>{category.replace('-', ' ')}</Link>
            </li>
          ))}
        </ul>
      </div>

    </aside>
  )
}

export default Sidebar