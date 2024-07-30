import React from "react";
import "./Header.css";
import { assets } from "../../assets/frontend_assets/assets";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here </h2>
        <p>
          "Discover fresh flavors delivered to your doorstep with ease. Your
          go-to destination for convenient and delicious dining experiences."
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
