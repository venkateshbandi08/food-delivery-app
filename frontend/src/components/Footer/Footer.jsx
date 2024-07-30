import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.big_byte_logo} alt="" />
          <p>
            "Discover fresh flavors delivered to your doorstep with ease. Your
            go-to destination for convenient and delicious dining experiences."
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9859859854 </li>
            <li>bigbytefoods@mail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Copyright 2024 © bigbytefoods - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
