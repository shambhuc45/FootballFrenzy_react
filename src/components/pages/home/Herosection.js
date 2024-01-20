import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Servicecard from "./Servicecard";

export default function Herosection() {
  const cardData = [
    { icon: "emojione-monotone:soccer-ball", title: "Sports Products" },
    {
      icon: "fluent:arrow-trending-lines-20-regular",
      title: "In-Demand Products",
    },
    {
      icon: "wpf:coins",
      title: "Best Prices",
    },
    {
      icon: "material-symbols-light:local-shipping-outline-rounded",
      title: "Free Delivery",
    },
  ];
  return (
    <>
      <div className="section-hero ">
        <div className="section-hero__content">
          <div className="section-hero__content--text col-50">
            <hr className="hor-line-about hor-line-small" />
            <h1 className=" heading-primary">
              The Premium Product with pleasure.
            </h1>
            <div className="typewriter">
              <h4 style={{ fontWeight: "bolder", color: "#1774d1" }}>
                SALE{" "}
                <span className="changing-text">
                  <Typewriter
                    words={["OFFER"]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={80}
                    delaySpeed={1000}
                  />
                </span>
              </h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              voluptatem temporibus sint, quisquam laboriosam accusantium.
            </p>

            <button className="about__content--btn btn-primary">
              ORDER NOW
            </button>
            <div className="services ">
              <h4 style={{ color: "#125496" }}>Our Services</h4>
              <div className="cards-container flex">
                {cardData.map((card) => (
                  <Servicecard
                    key={card.title}
                    icon={card.icon}
                    title={card.title}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="section-hero__content--image col-50 text-center">
            <div>
              <div className="composition">
                <img
                  src="images/barca.jpg"
                  alt="Barcelona"
                  className="composition-image composition-image-pic1"
                />
                <img
                  src="images/madrid.jpg"
                  alt="Madrid"
                  className="composition-image composition-image-pic2"
                />
                <img
                  src="images/bayern.jpg"
                  alt="Bayern"
                  className="composition-image composition-image-pic3"
                />
                <img
                  src="images/United.jpg"
                  alt="United"
                  className="composition-image composition-image-pic4"
                />
                <img
                  src="images/Liverpool.jpg"
                  alt="Bayern"
                  className="composition-image composition-image-pic5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
