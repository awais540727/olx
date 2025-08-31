import React from "react";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <nav className="navbar_top">
      <div className="container">
        <div className="container__title-top">
          <span className="title">olx</span>
        </div>
        <div className="container__motor-top">
          <div className="img_container">
            <img
              src="./img/header/iconMotors-6bf280165e43e55b173d0a53551e2bfb.png"
              alt="motor"
            />
          </div>
          <div className="img_name">
            <span className="name">motors</span>
          </div>
        </div>
        <div className="container__property-top">
          <div className="img_container">
            <img
              src="./img/header/iconProperty-d09c6d2e3621f900c17c9e8330a1a37b.png"
              alt="motor"
            />
          </div>
          <div className="img_name">
            <span className="name">motors</span>
          </div>
        </div>
        <div className="container__login-top">
          <a href="#" className="link">
            Login
          </a>
        </div>
        <div className="container__plus-top">
          <div className="img_container">
            <img
              src="/img/header/iconSellBorder_noinline-d9eebe038fbfae9f90fd61d971037e02.svg"
              alt="border"
              className="image"
            />
            <div className="img_container_plus">
              <img
                src="/img/header/iconPlusSell_noinline-75fc7ea23e80b50447cf5757d8ef083a.svg"
                alt="plus"
                className="img-plus"
              />
            </div>
            <div className="img_name">
              <span className="name">Sell</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
