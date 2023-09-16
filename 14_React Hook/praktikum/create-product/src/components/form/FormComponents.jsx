import { UploadOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Select,
  Upload,
  Button,
  Radio,
  Space,
  InputNumber,
  Row,
  Col,
  Typography,
  Table,
  Popconfirm,
} from "antd";
import React, { useEffect, useState } from "react";

const FormComponents = () => {
  const { TextArea } = Input;
  const { Title } = Typography;
  const [data, setData] = useState([]);
  const [count, setCount] = useState(data.length + 1);

    useEffect(() => {
      alert("Welcome");
    }, []);

  //image
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  //layout
  const layout = {
    wrapperCol: {
      span: 10,
    },
  };

  const TABLE_COLUMNS = [
    {
      title: "No",
      dataIndex: "key",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Product Category",
      dataIndex: "productCategory",
      key: "productCategory",
    },
    {
      title: "Product Freshness",
      dataIndex: "productFreshness",
      key: "productFreshness",
    },
    {
      title: "Product Price",
      dataIndex: "productPrice",
      key: "productPrice",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        data.length >= 1 ? (
          <Space>
            {/* <a onClick={() => handleEdit(record)}>Edit</a> */}
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => deleteData(record.key)}
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  const deleteData = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const addData = (values) => {
    const newData = [
      ...data,
      {
        key: count,
        ...values,
      },
    ];
    setData(newData);
    setCount(count + 1);
  };

  return (
    <>
      <Row justify="center" style={{ margin: "60px 0 20px 0" }}>
        <Col span={12}>
          <Title level={2}>Detail Product</Title>
          <Form name="product" layout="vertical" onFinish={addData}>
            <Form.Item
              {...layout}
              label="Product Name"
              name="productName"
              rules={[
                {
                  required: true,
                  message: "Input Product Name",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              {...layout}
              name="productCategory"
              label="Product Category"
              rules={[
                {
                  required: true,
                  message: "Input Product Category",
                },
              ]}
            >
              <Select placeholder="Choose...">
                <Select.Option value="Baju">Baju</Select.Option>
                <Select.Option value="Makanan">Makanan</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="imageProduct"
              label="Image Product"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[
                {
                  required: true,
                  message: "Input Image Product",
                },
              ]}
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              name="productFreshness"
              label="Product Freshness"
              rules={[
                {
                  required: true,
                  message: "Select Product Freshness",
                },
              ]}
            >
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value="Brand New"> Brand New </Radio>
                  <Radio value="Second Hand"> Second Hand </Radio>
                  <Radio value="Refufbished"> Refufbished </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="additionalDescription"
              label="Additional Description"
              rules={[
                {
                  required: true,
                  message: "Input Additional Description",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name="productPrice"
              label="Product Price"
              rules={[
                {
                  type: "number",
                  min: 0,
                  required: true,
                  message: "Input Price",
                },
              ]}
            >
              <InputNumber placeholder="$1" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row justify="center" style={{ margin: "50px 0" }}>
        <Col span={12}>
          <Table
            columns={TABLE_COLUMNS}
            dataSource={data}
            pagination={false}
            bordered
          />
        </Col>
      </Row>
    </>
  );
};

export default FormComponents;
