import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="nav-bar">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="company-name">
          <h1>VedicMeet</h1>
        </div>
        <div className="menu-button">
          <MoreVertOutlinedIcon />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
