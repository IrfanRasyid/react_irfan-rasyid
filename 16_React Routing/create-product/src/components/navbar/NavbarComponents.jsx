import React from "react";
import { Menu } from "antd";
import { MENU_ITEM } from "./constants";

const NavbarComponents = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
      }}
    >
      <h2
        style={{
          float: "left",
        }}
      >
        Simple Header
      </h2>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={MENU_ITEM}
        style={{
          border: "none",
          color: "#0D6EFD",
          fontWeight: "600",
        }}
        disabledOverflow
      />
    </div>
  );
};

export default NavbarComponents;
