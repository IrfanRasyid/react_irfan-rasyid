import React from 'react';
import { Layout, Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { updateFormData, submitForm } from './actions/contactFormActions';

const { Content } = Layout;

const LandingPage = ({ formData, updateFormData, submitForm }) => {
  const onFinish = (values) => {
    // Dispatch the action to update form data
    updateFormData(values);

    // Dispatch the action to submit the form
    submitForm(values);
  };

  return (
    <Layout>
      <Content style={{ padding: '50px' }}>
        <h1>Welcome to Our Landing Page</h1>
        <p>Feel free to contact us!</p>

        <Form name="contact-form" onFinish={onFinish} layout="vertical" initialValues={formData}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Invalid email format' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  formData: state.contactForm,
});

const mapDispatchToProps = {
  updateFormData,
  submitForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
