import { Button, Col, Form, Input, Row, Spin, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registrasi.css";

const FormRegistrasi = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    messageApi.open({
      type: "success",
      content: "Registrasi Success",
    });
    setLoading(true);
    setTimeout(() => {
      navigate("/");
      setLoading(false);
    }, 1500);
    console.log("Success:", values);
  };

  return (
    <>
      {contextHolder}
      <Spin spinning={loading}>
        <Row className="form-registrasi-container">
          <Col span={10}>
            <h1 className="form-registrasi-title">Form Registrasi</h1>
            <Form
              name="registrasi"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 14,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name",
                  },
                  {
                    min: 3,
                    message: "First name must be at least 3 characters",
                  },
                ]}
                hasFeedback
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name",
                  },
                  {
                    min: 3,
                    message: "Last name must be at least 3 characters",
                  },
                ]}
                hasFeedback
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email",
                  },
                  {
                    type: "email",
                    message: "Please input valid email",
                  },
                ]}
                hasFeedback
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password",
                  },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your password",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Password doesn't match");
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 6,
                  span: 14,
                }}
              >
                <Button
                  className="form-registrasi-button"
                  type="primary"
                  htmlType="submit"
                >
                  Register
                </Button>
                <Link to="/">already have an account?</Link>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Spin>
    </>
  );
};

export default FormRegistrasi;
