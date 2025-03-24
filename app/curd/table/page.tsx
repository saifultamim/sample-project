import React from "react";
import getProduct from "./server-action";

const Page = async () => {
  const response = await getProduct();
  console.log("======= ", response);
  return (
    <div>
      <p>this is page</p>
    </div>
  );
};

export default Page;
