import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Menubar.scss';

const Menubar = ({toggle}) => {
  return (
    <div className="menu" style={{right : `${toggle ? "0" : "-120%"}`}}>
    <div className="menu_links flex column">
      <a href="/" className="m_link flex-between"><span>Menu</span><span><BsChevronRight /></span></a>
      <a href="/" className="m_link">Rewards</a>
      <a href="/" className="m_link">Gift Cards</a>
    </div>

    <div className="m_sj">
    <button className="btn sign">Sign in</button>
    <button className="btn join">Join now</button>
    </div>
    <a href="/" className="find_store flex-center">
            <span>
              <FaMapMarkerAlt />
            </span>{" "}
            <span>Find a store</span>
          </a>
  </div>
  )
}

export default Menubar