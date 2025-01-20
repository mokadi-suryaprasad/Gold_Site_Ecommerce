import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navba.css";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
const Navba = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="search">
          <SearchIcon />
          <input type="text" style={{ backgroundColor: "cream" }} />
        </div>
      </div>
      <div className="center">
        <Link to="/" type="text" className="text">
          <h1>Gold $ite</h1>
        </Link>
      </div>
      <div className="right">
        <div>
          <Link to="/register" className="text">
            Register
          </Link>
        </div>
        <div>
          <Link to="/login" className="text">
            Sign in
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navba;
