import { Menu, Row } from "antd";
import React from "react";
import { MENU_ITEM } from "./constants";
import "./header.css";

const HeaderComponent = () => {
  return (
    <Row justify={"space-between"} className="header-container">
      <h2 className="header-title">Simple Header</h2>
      <Menu
        className="header-menu"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={MENU_ITEM}
        disabledOverflow
      />
    </Row>
  );
};

export default HeaderComponent;
