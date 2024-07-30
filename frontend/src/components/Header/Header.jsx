import React from "react";
import "./Header.css";
import { assets } from "../../assets/frontend_assets/assets";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aliquid
          aperiam at ipsa iusto nam ullam velit voluptatum omnis facilis?
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
