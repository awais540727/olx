import React from "react";
import "./Layout.scss";
import Category from "../../../pages/category/Category";
import MobilePhones from "../../../components/mobilephones/MobilePhones";
const Layout = () => {
  return (
    <>
      <div className="layout">
        <Category />
        <MobilePhones />
      </div>
    </>
  );
};

export default Layout;
