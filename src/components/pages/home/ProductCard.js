import React from "react";
import { Icon } from "@iconify/react";

export default function ProductCard(props) {
  return (
    <>
      <div
        className="product__card"
        onClick={() => props.onClick(props.productDetails)}
      >
        <div className="product__card--image relative">
          <img src={props.src} alt="Arsenal" />
          <span className="tag absolute">SALE!</span>
        </div>
        <div className="product__card--info">
          <p className="product-productTitle">{props.productTitle}</p>
          <span className="actual-price">NPR.{props.actualPrice}</span>
          <span className="price">NPR.{props.price}</span>
          <br />
          <span className="rating">
            <Icon icon="mingcute:star-fill" /> &nbsp;
            <span>
              {props.rating === 0 || ""
                ? "Not Rated"
                : `${props.rating} Rating`}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
