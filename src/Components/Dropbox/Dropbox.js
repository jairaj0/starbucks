import React, { useState } from "react";
import "./Dropbox.scss";
import { BsChevronDown } from "react-icons/bs";

const Dropbox = () => {
  const [faqStatus1, setFaqStatus1] = useState(false);
  const [faqStatus2, setFaqStatus2] = useState(false);
  const [faqStatus3, setFaqStatus3] = useState(false);
  const [faqStatus4, setFaqStatus4] = useState(false);
  const [faqStatus5, setFaqStatus5] = useState(false);

  const FaqStatus1 = () => {
    faqStatus1 ? setFaqStatus1(false) : setFaqStatus1(true);
  };
  const FaqStatus2 = () => {
    faqStatus2 ? setFaqStatus2(false) : setFaqStatus2(true);
  };
  const FaqStatus3 = () => {
    faqStatus3 ? setFaqStatus3(false) : setFaqStatus3(true);
  };
  const FaqStatus4 = () => {
    faqStatus4 ? setFaqStatus4(false) : setFaqStatus4(true);
  };
  const FaqStatus5 = () => {
    faqStatus5 ? setFaqStatus5(false) : setFaqStatus5(true);
  };
  return (
    <div className=" flex column df_box">
      <div onClick={FaqStatus1} className="q">
        <h1 className="f_title">
          About Us{" "}
          <span>
            <BsChevronDown
              style={{ transform: `rotate(${faqStatus1 ? "180deg" : "0deg"})` }}
            />
          </span>
        </h1>
        <div
          style={{
            height: `${faqStatus1 ? "auto" : "0px"}`,
            overflow: "hidden",
          }}
          className="ans flex column"
        >
          <a href="/">Our Company</a>
          <a href="/">Our Coffee</a>
          <a href="/">Stories and News</a>
          <a href="/">Starbucks Archive</a>
          <a href="/">Investor Relations</a>
          <a href="/">Customer Service</a>
        </div>
      </div>

      <div onClick={FaqStatus2} className="q">
        <h1 className="f_title">
          Careers
          <span>
            <BsChevronDown
              style={{ transform: `rotate(${faqStatus2 ? "180deg" : "0deg"})` }}
            />
          </span>
        </h1>
        <div
          style={{
            height: `${faqStatus2 ? "auto" : "0px"}`,
            overflow: "hidden",
          }}
          className="ans flex column"
        >
          <a href="/">Culture and Values</a>
          <a href="/">Inclusion, Diversity, and Equity</a>
          <a href="/">Alumni Community</a>
          <a href="/">U.S. Careers</a>
          <a href="/">International Careers</a>
        </div>
      </div>

      <div onClick={FaqStatus3} className="q">
        <h1 className="f_title">
          Social Impact
          <span>
            <BsChevronDown
              style={{ transform: `rotate(${faqStatus3 ? "180deg" : "0deg"})` }}
            />
          </span>
        </h1>
        <div
          style={{
            height: `${faqStatus3 ? "auto" : "0px"}`,
            overflow: "hidden",
          }}
          className="ans flex column"
        >
          <a href="/">Landlord Support Center</a>
          <a href="/">Planet</a>
          <a href="/">Environmental and Social Impact Reporting</a>
        </div>
      </div>

      <div onClick={FaqStatus4} className="q">
        <h1 className="f_title">
          For Business Partners{" "}
          <span>
            <BsChevronDown
              style={{ transform: `rotate(${faqStatus4 ? "180deg" : "0deg"})` }}
            />
          </span>
        </h1>
        <div
          style={{
            height: `${faqStatus4 ? "auto" : "0px"}`,
            overflow: "hidden",
          }}
          className="ans flex column"
        >
          <a href="/">Landlord Support Center</a>
          <a href="/">Suppliers</a>
          <a href="/">Corporate Gift Card Sales</a>
          <a href="/">Office and Foodservice Coffee</a>
        </div>
      </div>

      <div onClick={FaqStatus5} className="q">
        <h1 className="f_title">
          Order and Pickup
          <span>
            <BsChevronDown
              style={{ transform: `rotate(${faqStatus5 ? "180deg" : "0deg"})` }}
            />
          </span>
        </h1>
        <div
          style={{
            height: `${faqStatus5 ? "auto" : "0px"}`,
            overflow: "hidden",
          }}
          className="ans flex column"
        >
          <a href="/">Order on the App</a>
          <a href="/">Order on the Web</a>
          <a href="/">Delivery</a>
          <a href="/">Order and Pickup Options</a>
          <a href="/">Explore and Find Coffee for Home</a>
        </div>
      </div>
    </div>
  );
};

export default Dropbox;
