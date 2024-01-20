import React from "react";
import ImageCarousel from "./ImageCarousel";
import ProductDetails from "./ProductDetails";
import { useLocation } from "react-router-dom";

export default function SingleDetailed(props) {
  const location = useLocation();
  const {
    productImages,
    productTitle,
    productDescription,
    price,
    actualPrice,
    discount,
  } = location.state.productDetails;

  return (
    <>
      <section className="product-details row">
        <div className="product-contents">
          <ImageCarousel images={productImages} />
          <ProductDetails
            title={productTitle}
            description={productDescription}
            price={price}
            actualPrice={actualPrice}
            discount={discount}
          />
        </div>
      </section>
    </>
  );
}
