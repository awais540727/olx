import React from "react";
import "./Layout.scss";
import Category from "../../../pages/category/Category";
import MobilePhones from "../../../components/mobilephones/MobilePhones";
import NavBar from "../NavBar";
import SearchBar from "../searchbar/SearchBar";
import SearchBar1 from "../../../components/search/SearchBar1";
const Layout = ({ children }) => {
  return (
    <>
      {children}
      {/* <SearchBar /> */}
      <SearchBar1 />
      <div className="layout">
        {/* <NavBar /> */}
        <Category />
        <MobilePhones />
      </div>
    </>
  );
};

export default Layout;
