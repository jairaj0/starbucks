import React,{ useState , useEffect } from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import Menubar from "../Menubar/Menubar";

const Navbar = () => {
  const [toggle , setToggle] = useState(false)

useEffect(() => {
  toggle ? document.body.style.overflow="hidden" : document.body.style.overflow="auto";
}, [toggle])

  return (
    <nav>
      <div className="container flex-between">
        <div className="links flex">
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>

          <a className="link" href="/">
            menu
          </a>
          <a className="link" href="/">
            rewards
          </a>
          <a className="link" href="/">
            gift cards
          </a>
        </div>

        <div className="nav_right flex">
          <a href="/" className="find_store flex-center">
            <span>
              <FaMapMarkerAlt />
            </span>{" "}
            <span>Find a store</span>
          </a>
          <button className="btn sign">Sign in</button>
          <button className="btn join">Join now</button>
        </div>

        <div id="menubar" onClick={()=>toggle ? setToggle(false) : setToggle(true)} className={toggle ? 'open' : ""}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Menubar toggle={toggle}/>
      </div>
    </nav>
  );
};

export default Navbar;
