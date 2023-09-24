import React from "react";
import Title from "./title/Title";
import FormComponents from "./form/FormComponents";
import { useParams } from "react-router-dom";

const CreateProduct = () => {
  const { id } = useParams;
  console.log("id", id);
  return (
    <>
      {id === "" ? (
        <>
          <Title />
          <FormComponents />
        </>
      ) : (
        <FormComponents />
      )}
    </>
  );
};

export default CreateProduct;
