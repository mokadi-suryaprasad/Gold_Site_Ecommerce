import React from "react";
import "./GoldSetter.css";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const GoldSetter = () => {
  return (
    <div className="goldContainer">
      <h1>GoldSetter</h1>
      <p>Get new alerts in mail</p>
      <div className="goldtext">
        <input type="text" name="gmail" id="" placeholder="gmail" />
        <SendIcon style={{ color: "lightblue" }}></SendIcon>
      </div >
      <FacebookIcon style={{ color: "3B5999" }} />
      <InstagramIcon style={{ color: "red" }} />
    </div>
  );
};

export default GoldSetter;
