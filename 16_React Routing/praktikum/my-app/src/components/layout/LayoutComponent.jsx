import { Layout } from "antd";
import React from "react";
import FooterComponent from "./footer/FooterComponent";
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
        <FooterComponent />
      </Layout>
    </>
  );
};

export default LayoutComponent;
