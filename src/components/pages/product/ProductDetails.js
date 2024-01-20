import React, { useState } from "react";

export default function ProductDetails({
  title,
  description,
  price,
  actualPrice,
  discount,
}) {
  const [selectedSize, setSelectedSize] = useState("s");
  const sizes = ["s", "m", "l", "xl"];

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  return (
    <div className="details">
      <h1 className="heading-primary">{title}</h1>
      <p className="product-description">Description:</p>
      <ul className="properties">
        {description.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <span className="product-price">NPR. {price}</span>
      <span className="product-actual-price">NPR. {actualPrice}</span>
      <span className="product-discount">({discount} Off)</span>
      <div className="product-size-selector">
        <p className="product-sub-heading">Select Size</p>
        <div className="btn-sizes">
          {sizes.map((size) => (
            <div key={size} className="btn-size">
              <input
                type="radio"
                name="size"
                value={size}
                checked={selectedSize === size}
                id={`${size}-size`}
                onChange={() => handleSizeChange(size)}
                hidden
              />
              <label
                htmlFor={`${size}-size`}
                className={`size-radio-btn ${
                  selectedSize === size ? "check" : ""
                }`}
              >
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
