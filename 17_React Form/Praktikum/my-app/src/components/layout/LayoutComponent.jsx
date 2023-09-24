import { Layout } from "antd";
import React from "react";
import HeaderComponent from "./header/HeaderComponent";

const LayoutComponent = ({ children }) => {
  const { Content } = Layout;
  return (
    <>
      <Layout>
        <HeaderComponent />
        <Content>
          <div className="site-layout">{children}</div>
        </Content>
      </Layout>
    </>
  );
};

export default LayoutComponent;
