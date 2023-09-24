import { Link } from "react-router-dom";

export const MENU_ITEM = [
  {
    key: 1,
    label: <Link to="/">Landing Page</Link>,
    style: {
      color: "white",
      backgroundColor: "#0D6EFD",
      borderRadius: "5px",
    },
  },
  {
    key: 2,
    label: <Link to="/create-product">Create Product</Link>,
  },
  {
    key: 3,
    label: "Pricing",
  },
  {
    key: 4,
    label: "FAQs",
  },
  {
    key: 5,
    label: "About",
  },
];
