import React from "react";
import { Link } from "react-router-dom";
import { allProducts } from "../data";
import "./ProductItems.css";

const ProductItems = () => {
  return (
    <div className="productdiv">
      <Link to="/productsingle">ALL STYLES</Link>
      <div className="filter">
        <div className="sort">
          <h3>Sort By: </h3>
          <select className="color" id="">
            <option value="0">Type</option>
            <option value="1">Rings</option>
            <option value="2">Chains</option>
            <option value="3">Braclet</option>
          </select>
        </div>
        <div className="size">
          <h3>Size:{"\t"}</h3>
          <select className="Size" id="">
            <option value="0">Size</option>
            <option value="1">Small</option>
            <option value="2">Medium</option>
            <option value="3">Large</option>
          </select>
        </div>
      </div>
      <div className="productImg">
        {allProducts.map((items) => (
          <div className="imgContainer">
            <img className="eachimage" src={items.img} alt="" key={items.id} />
            <button>Add item</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItems;
