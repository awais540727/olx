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
      <div className="layout">
        {/* <NavBar /> */}
        <SearchBar />
        <Category />
        <MobilePhones />
      </div>
    </>
  );
};

export default Layout;
