import cup from "../../assets/cup.jpg";
import cup1 from "../../assets/cup1.jpg";
import cup2 from "../../assets/cup2.jpg";
import img from "../../assets/img.jpg";

const custom = (
  <div>
    <h1 className="c_title">
      Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts to
      get:
    </h1>
    <ul>
      <li>150 Stars + 500 miles when you link before 12/31</li>
      <li>Double Stars on Delta travel days</li>
      <li>
        1 mile per $1 spent at Starbucks (excludes taxes and gratuities)**
      </li>
    </ul>
  </div>
);

export const cardData = [
  {
    img: cup1,
    title: "Win a thousand Stars",
    dis: "We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in our Million Stars Giveaway and much more all week!*",
    btn_text: "Play to win",
  },
  {
    img: img,
    title: "A new way to earn sips and trips",
    dis: custom,
    btn_text: "Link accounts",
    custom_class: "ulli",
  },
  {
    img: cup,
    title: "Perfectly pumpkin",
    dis: "Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold Brew.",
    btn_text: "Order now",
    custom_class: "bggreen",
  },
  {
    img: cup2,
    title: "Layers of baked apple yum",
    dis: "Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso.",
    btn_text: "Learn more",
    custom_class: "bggreen",
  },
];
