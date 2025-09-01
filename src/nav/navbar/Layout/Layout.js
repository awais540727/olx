import React from "react";
import "./Layout.scss";
import Category from "../../../pages/category/Category";
import MobilePhones from "../../../components/mobilephones/MobilePhones";
import NavBar from "../NavBar";
import SearchBar from "../searchbar/SearchBar";
const Layout = ({ children }) => {
  return (
    <>
      {children}
      <SearchBar />
      <div className="layout">
        {/* <NavBar /> */}
        <Category />
        <MobilePhones />
      </div>
    </>
  );
};

export default Layout;
