import React from "react";
import Cards from "../Components/Cards/Cards";
import { cardData } from "../Components/Cards/CardsDetails";

import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <section>
      <Navbar />
      {cardData.map(({ img, title, dis, btn_text, custom_class }, i) => (
        <Cards
          key={i}
          i={i}
          img={img}
          title={title}
          dis={dis}
          btn_text={btn_text}
          custom_class={custom_class}
        />
      ))}
      <Footer />
    </section>
  );
};

export default Home;
