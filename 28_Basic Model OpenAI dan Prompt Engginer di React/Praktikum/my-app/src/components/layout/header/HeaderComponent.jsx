import { Menu, Row } from "antd";
import React from "react";
import { MENU_ITEM } from "./constants";
import "./header.css";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Row justify={"space-between"} className="header-container">
      <Link to="/home" style={{ color: "black" }}>
        <h2 className="header-title">Simple Header</h2>
      </Link>
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
