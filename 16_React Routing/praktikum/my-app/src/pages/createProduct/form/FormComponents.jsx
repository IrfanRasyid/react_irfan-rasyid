import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Radio,
  Row,
  Select,
  Space,
  Table,
  Typography,
  Upload,
} from "antd";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DATA_PRODUCT } from "./constants";

const FormComponents = () => {
  const { TextArea } = Input;
  const { Title } = Typography;
  const [data, setData] = useState(DATA_PRODUCT);
  const [count, setCount] = useState(data.length + 1);
  const { id } = useParams();

  console.log("data", data);
  //filter data by id
  const dataFilter = id ? data.filter((item) => item.key === id) : data;

  //image
  const normFile = (e) => {
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

  //columns table
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
      //edit and delete
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
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        ) : null,
    },
    {
      //detail product
      title: "Detail",
      dataIndex: "detail",
      render: (_, record) => (
        <Link to={record.key}>
          <Button type="primary">Detail</Button>
        </Link>
      ),
    },
  ];

  //delete data
  const deleteData = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  //add data
  const addData = (values) => {
    const newData = [
      ...data,
      {
        //key number to string because key is string in data table columns
        key: count.toString(),
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
              <Upload name="logo" action="/create-product" listType="picture">
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
      <Row justify="center">
        <Col span={12}>
          {/* check id if id is true then show table with filter data by id
          if id is false then show table with all data */}
          {id ? (
            <>
              <Link to="/create-product">
                <Button type="primary">Back</Button>
              </Link>
              <Table
                columns={TABLE_COLUMNS}
                dataSource={dataFilter}
                style={{ margin: "30px 0" }}
                pagination={false}
              />
            </>
          ) : (
            <Table
              columns={TABLE_COLUMNS}
              dataSource={data}
              style={{ margin: "30px 0" }}
              pagination={false}
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default FormComponents;
