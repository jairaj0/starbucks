import React from "react";
import Notice from "../Notice/Notice";
import "./Footer.scss";
import { BsSpotify, BsFacebook, BsPinterest , BsYoutube  } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import Dropbox from "../Dropbox/Dropbox";

const slinks = [
  { path: "/", icon: <BsSpotify /> },
  { path: "/", icon: <BsFacebook /> },
  { path: "/", icon: <BsPinterest /> },
  { path: "/", icon: <AiFillInstagram /> },
  { path: "/", icon: <BsYoutube /> },
  { path: "/", icon: <AiFillTwitterCircle /> },
];

const Footer = () => {
  return (
    <footer className="container">
      <Notice />
      <div className="f_links">
        <div className="f_box flex column">
          <h1 className="f_title">About Us</h1>
          <a href="/">Our Company</a>
          <a href="/">Our Coffee</a>
          <a href="/">Stories and News</a>
          <a href="/">Starbucks Archive</a>
          <a href="/">Investor Relations</a>
          <a href="/">Customer Service</a>
        </div>

        <div className="f_box flex column">
          <h1 className="f_title">Careers</h1>
          <a href="/">Culture and Values</a>
          <a href="/">Inclusion, Diversity, and Equity</a>
          <a href="/">Alumni Community</a>
          <a href="/">U.S. Careers</a>
          <a href="/">International Careers</a>
        </div>

        <div className="f_box flex column">
          <h1 className="f_title">Social Impact</h1>
          <a href="/">Landlord Support Center</a>
          <a href="/">Planet</a>
          <a href="/">Environmental and Social Impact Reporting</a>
        </div>

        <div className="f_box flex column">
          <h1 className="f_title">For Business Partners</h1>
          <a href="/">Landlord Support Center</a>
          <a href="/">Suppliers</a>
          <a href="/">Corporate Gift Card Sales</a>
          <a href="/">Office and Foodservice Coffee</a>
        </div>

        <div className="f_box flex column">
          <h1 className="f_title">Order and Pickup</h1>
          <a href="/">Order on the App</a>
          <a href="/">Order on the Web</a>
          <a href="/">Delivery</a>
          <a href="/">Order and Pickup Options</a>
          <a href="/">Explore and Find Coffee for Home</a>
        </div>
      </div>

      {/* ********* Responsive ******** */}
      <Dropbox />
      {/* ********* Responsive ******** */}

      <div className="b_box">
        <div className="s_links">
          {slinks.map(({ path, icon }, i) => (
            <a key={i} href={path}>
              {icon}
            </a>
          ))}
        </div>
        <div className="pp flex">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
          <a href="/">CA Supply Chain Act</a>
          <a href="/">Cookie Preferences</a>
        </div>

      <p className="cpyr">© 2022 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
