import React from "react";
import Announcement from "../components/Announcement";
import Navba from "../components/Navba";
import ProductItems from "../components/ProductItems";
import GoldSetter from "../components/GoldSetter";

const ProductList = () => {
  return (
    <div>
      <Announcement />
      <Navba />
      <ProductItems />
      <GoldSetter/>
    </div>
  );
};

export default ProductList;
