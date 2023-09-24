import { Row } from "antd";
import React from "react";
import "./footer.css";

const FooterComponent = () => {
  return (
    <>
      <Row className="footer-container" justify={"space-between"}>
        <p>
          &copy; Copyright <b>Arsha</b>. All Rights Reserved
        </p>
        <p>
          Designed by <a href="#">BootstrapMade</a>
        </p>
      </Row>
    </>
  );
};

export default FooterComponent;
