import { Link } from "react-router-dom";
import { Button } from "antd";

export const MENU_ITEM = [
  {
    key: "1",
    label: <Link to="/create-product">Create Product</Link>,
    style: {
      color: "white",
      backgroundColor: "#0D6EFD",
      borderRadius: "5px",
    },
  },
  {
    key: "2",
    label: "Pricing",
  },
  {
    key: "3",
    label: <Link to="/open-ai">Open AI</Link>,
    style: {
      color: "white",
      backgroundColor: "#0D6EFD",
      borderRadius: "5px",}
  },
  {
    key: "4",
    label: "About",
  },
  {
    key: "5",
    label: (
      <Link to="/">
        <Button
          size="large"
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
          style={{ color: "white", fontWeight: 600, borderRadius: "5px" }}
        >
          Logout
        </Button>
      </Link>
    ),
  },
];
