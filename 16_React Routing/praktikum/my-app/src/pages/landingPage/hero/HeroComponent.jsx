import { Button, Col, Image, Row, Space } from "antd";
import React from "react";
import { HeroImg } from "../../../assets";
import "./hero.css";

const HeroComponent = () => {
  return (
    <Row className="hero-container">
      <Col className="hero-left" span={12}>
        <h1 className="title-hero">Better Solutions For Your Business</h1>
        <p className="description-hero">
          We are team of talented designers making websites with Bootstrap
        </p>
        <Space align="start" className="btn-hero">
          <Button className="btn-hero-1" type="primary" size="large">
            Get Started
          </Button>
          <Button className="btn-hero-2" type="text" size="large">
            Watch Video
          </Button>
        </Space>
      </Col>
      <Col className="hero-right" span={12}>
        <Image src={HeroImg} preview={false} width={500} alt="hero image" />
      </Col>
    </Row>
  );
};

export default HeroComponent;
