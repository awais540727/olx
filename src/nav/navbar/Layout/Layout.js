import React from "react";
import "./Layout.scss";
import Category from "../../../pages/category/Category";
import MobilePhones from "../../../components/mobilephones/MobilePhones";
import NavBar from "../NavBar";
import SearchBar from "../searchbar/SearchBar";
import SearchBar1 from "../../../components/search/SearchBar1";
import Car from "../../../components/car/Car";
const Layout = ({ children }) => {
  return (
    <>
      {children}
      {/* <SearchBar /> */}
      <SearchBar1 />
      <div className="layout">
        {/* <NavBar /> */}
        <Category />
        <Car />
        <MobilePhones />
      </div>
    </>
  );
};

export default Layout;
