import React from "react";
import Header from "./Header";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
