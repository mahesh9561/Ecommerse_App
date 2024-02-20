import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className=" text-white bg-gradient-to-b from-orange-500 to-orange-600">
      <div className="px-20">
        <div className=" py-2 flex items-center justify-between border-b border-orange-300">
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/seller">Seller Center</Link>
            </li>
            <li className="vert-line"></li>
            <li>
              <Link to="/download">Download</Link>
            </li>
            <li className="flex items-center">
              <span className="fs-13">Follow us on</span>
              <ul className="social-links flex items-center space-x-2">
                <li className="mx-2">
                  <a href="www.facebook.com" className="fs-15">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="mx-2">
                  <a href="www.instagram.com" className="fs-15">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/" className="top-link-itm">
                <span className="top-link-itm-ico mx-2">
                  <i className="fa-solid fa-circle-question"></i>
                </span>
                <span className="top-link-itm-txt">Support</span>
              </Link>
            </li>
            <li className="vert-line"></li>
            <li>
              <Link to="/">
                <span className="top-link-itm-txt">Register</span>
              </Link>
            </li>
            <li className="vert-line"></li>
            <li>
              <Link to="/">
                <span className="top-link-itm-txt">Log in</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Navbar/>
        </div>
      </div>
    </header>
  );
};

export default Header;
