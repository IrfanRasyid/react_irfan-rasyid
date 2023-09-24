import { Col, Row } from "antd";
import React from "react";
import "./contact.css";
import { usefulLinks, ourServices } from "./constants";
import Gap from "../../../components/gap/Gap";

const ContactComponent = () => {
  return (
    <Row className="contact-container" align={"top"}>
      <Col span={6}>
        <h1 className="contact-title">Arsha</h1>
        <p>
          A108 Adam Street <br />
          New York, NY 535022 <br />
          United States
          <br />
          <br />
          <br />
          <b>Phone:</b> +1 5589 55488 55 <br />
          <b>Email:</b> info@example.com
        </p>
      </Col>
      <Col span={6}>
        <h2 className="contact-title">Useful Links</h2>
        {usefulLinks.map((item) => (
          <>
            <Gap height={10} />
            <p key={item.key}>{item.title}</p>
          </>
        ))}
      </Col>
      <Col span={6}>
        <h2 className="contact-title">Our Services</h2>
        {ourServices.map((item) => (
          <>
            <Gap height={10} />
            <p key={item.key}>{item.title}</p>
          </>
        ))}
      </Col>
      <Col span={6}>
        <h2 className="contact-title">Our Social Networks</h2>
        <Gap height={10} />
        <p>
          Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
          valies
        </p>
        <Gap height={10} />
        <Row>
          {new Array(5).fill(0).map((index) => (
            <Col span={3}>
              <div className="circel" key={index}></div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ContactComponent;
