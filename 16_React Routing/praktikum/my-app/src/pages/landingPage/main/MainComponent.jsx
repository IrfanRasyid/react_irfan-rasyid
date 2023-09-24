import { Button, Input, Row, Space } from "antd";
import React from "react";
import "./main.css";
import Gap from "../../../components/gap/Gap";

const MainComponent = () => {
  return (
    <Row className="menu-container" justify={"center"} align={"middle"}>
      <h1>Join Our Newsletter</h1>
      <Gap height={20} />
      <p>
        Tamen quem nulla quae legam multos aute sint culpa legam noster magna
      </p>
      <Gap height={20} />
      <Space.Compact>
        <Input className="input-main" />
        <Button className="btn-main" type="primary">
          Submit
        </Button>
      </Space.Compact>
    </Row>
  );
};

export default MainComponent;
