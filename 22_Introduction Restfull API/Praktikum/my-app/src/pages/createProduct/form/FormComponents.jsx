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
import { useDispatch } from "react-redux";
import { addProduct, editProduct } from "../../../redux/slices/productSlice"; // Import editProduct
import { APIProducts } from "../../../api/APIProduct";

const FormComponents = () => {
  const { TextArea } = Input;
  const { Title } = Typography;
  const [data, setData] = useState(DATA_PRODUCT);
  const [count, setCount] = useState(data.length + 1);
  const { id } = useParams();

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
      title: "Image Product",
      dataIndex: "imageProduct",
      key: "imageProduct",
      render: (_, record) => (
        <img
          src={record.imageProduct}
          alt="product"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      ),
    },
    {
      //delete
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        data.length >= 1 ? (
          <Space>
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
      title: "Edit",
      dataIndex: "edit",
      render: (_, record) => (
        <Button type="primary" onClick={() => handleEdit(record.key)}>
          Edit
        </Button>
      ),
    },
    {
      //detail product
      title: "Detail",
      dataIndex: "detail",
      render: (_, record) => {
        if (!id && data.length >= 1) {
          return (
            <Link to={record.key}>
              <Button type="primary">Detail</Button>
            </Link>
          );
        } else {
          //disable button detail
          return (
            <Button type="primary" disabled>
              Detail
            </Button>
          );
        }
      },
    },
  ];

  //edit data
  const [editData, setEditData] = useState(null);
  const handleEdit = (key) => {
    const productToEdit = data.find((item) => item.key === key);
    setEditData(productToEdit);
  };

  const updateData = (values) => {
    const updatedData = data.map((item) =>
      item.key === editData.key ? { ...item, ...values } : item
    );

    // Menggunakan dispatch untuk mengirim aksi Redux
    dispatch(editProduct(editData.key, values));
    setData(updatedData);
    setEditData(null);
  };

  //delete data
  const deleteData = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  //add data
  const dispatch = useDispatch();

  const addData = (values) => {
    const newData = [
      ...data,
      {
        key: count.toString(),
        ...values,
      },
    ];

    // Menggunakan dispatch untuk mengirim aksi Redux
    dispatch(addProduct(newData));
    setData(newData);
    setCount(count + 1);
  };

  useEffect(() => {
    APIProducts.getProducts().then((data) => {
      setState({ products: data });
    });
  }, []);

  const navigate = useNavigate();
  function handleDetailClick(item) {
    navigate(`/product/${item.key}`, { state: { item } });
  }
  function handleEditClick(item) {
    navigate(`/edit-product/${item.key}`, { state: { item } });
  }

  return (
    <>
      {/* id is true */}
      {id ? (
        <Row justify="center" style={{ margin: "120px 0" }}>
          <Col span={14}>
            <Title level={2}>Detail Product</Title>
            <Link to="/create-product">
              <Button type="primary">Back</Button>
            </Link>
            <Table
              columns={TABLE_COLUMNS}
              dataSource={dataFilter}
              style={{ margin: "30px 0" }}
              pagination={false}
            />
          </Col>
        </Row>
      ) : (
        <>
          {/* id is false */}
          <Row justify="center" style={{ margin: "60px" }}>
            <Col span={12}>
              <Title level={2}>Detail Product</Title>
              <Form name="product" layout="vertical" onFinish={editData ? updateData : addData}>
                <Form.Item
                  {...layout}
                  label="Product Name"
                  name="productName"
                  rules={[
                    {
                      required: true,
                      message: "Input Product Name",
                    },
                    //regex for input only alphabet and space only
                    {
                      pattern: /^[a-zA-Z ]*$/,
                      message: "Input only alphabet and space",
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
                  <Upload
                    name="logo"
                    action="/create-product"
                    listType="picture"
                    accept="image/*"
                    maxCount={1}
                  >
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
                      <Radio value="Refurbished"> Refurbished </Radio>
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
                  // regex number
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
                  {editData ? "Update" : "Submit"}
                </Button>
              </Form>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={14}>
              <Table
                columns={TABLE_COLUMNS}
                dataSource={id ? dataFilter : apiData} // Menggunakan dataFilter jika id ada, atau apiData jika tidak
                style={{ margin: "30px 0" }}
                pagination={false}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default FormComponents;
