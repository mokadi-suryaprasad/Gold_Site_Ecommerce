import React from "react";
import { categories } from "../data";
import "./CategoriesItems.css";
import { Link } from "react-router-dom";
const CategoriesItems = (items) => {
  let productlist = "";
  categories.map((items)=>{
  if ((items.title) === "Barclets") {
    return productlist = "/productRings";
  } else {
    return productlist = "/productlist";
    }
  });
  return (
    <div className="categoriesItems">
      {categories.map((items) => (
        <div className="list">
          <div className="imgbox">
            <img className="imgboxCat" src={items.img} alt="" />
          </div>
          <div className="infoCat">
            <h1>{items.title}</h1>
            <Link to={productlist}>
              <button>SHOP ME</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesItems;
