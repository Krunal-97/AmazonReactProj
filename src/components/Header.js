import React from "react";
import "../styles/Header.css";
import header_logo from "../images/amazon_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./pages/firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleLogOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={header_logo}></img>
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option">
            <span className="header_option_line_one">
              Hello, {user ? `${user.email}` : "Guest"}
            </span>
            <span className="header_option_line_two" onClick={handleLogOut}>
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_option_line_one">Returns</span>
          <span className="header_option_line_two">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_option_line_one">Your</span>
          <span className="header_option_line_two">Prime</span>
        </div>

        <div className="header_openBasketIcon">
          <Link to="/checkout">
            <ShoppingBasketIcon className="header_basket" />
          </Link>
          <span className="header_option_line_two header_basket_count">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
