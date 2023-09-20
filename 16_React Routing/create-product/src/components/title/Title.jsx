import { Col, Row } from "antd";
import React from "react";
import { bsLogo } from "../../assets";

const Title = () => {
  return (
    <>
      <Row justify="center" style={{ marginTop: "50px" }}>
        <Col span={16} style={{ textAlign: "center" }}>
          <img src={bsLogo} alt="Logo Bootstrap" />
          <h1 style={{ fontWeight: 500, marginTop: "20px" }}>Create Product</h1>
          <p style={{ fontSize: 20, fontWeight: 300 }}>
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Title;
