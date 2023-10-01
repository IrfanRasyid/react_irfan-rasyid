import { LockTwoTone, MailTwoTone } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row, Spin, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const FormLogin = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    messageApi.open({
      type: "success",
      content: "Login Success",
    });
    setLoading(true);
    setTimeout(() => {
      messageApi.destroy();
      localStorage.setItem("token", true);
      navigate("/home");
      setLoading(false);
    }, 1500);
    setData([...data, values]);
  };

  console.log("data", data);
  return (
    <>
      {contextHolder}
      <Spin spinning={loading}>
        <Row className="login-form-container">
          <Col span={6}>
            <h1 className="login-form-header">Login</h1>
            <Form name="login" onFinish={onFinish}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                  {
                    type: "email",
                    message: "Please input valid Email!",
                  },
                ]}
              >
                <Input prefix={<MailTwoTone />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters!",
                  },
                ]}
              >
                <Input
                  prefix={<LockTwoTone />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                Or
                <Link to="/form-registrasi"> register now!</Link>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Spin>
    </>
  );
};

export default FormLogin;
