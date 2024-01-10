import React from "react";
import ImageCarousel from "./ImageCarousel";
import ProductDetails from "./ProductDetails";

export default function SingleDetailed() {
  const productDetails = [
    {
      productImages: [
        "barcaH/default.jpg",
        "barcaH/front.png",
        "barcaH/frontzoom.png",
        "barcaH/back.png",
        "barcaH/side.png",
        "barcaH/side2.png",
      ],
      productTitle: "FC Barcelona Home Shirt 22/23 Player’s Edition",
      productDescription: [
        "Nike Dri-FIT technology",
        "La Liga logo patch on the right sleeve.",
        "High-stretch, quick-drying fabric",
        "100% recycled polyester",
        "Colour: Blue and scarlet.",
      ],
      actualPrice: 2200,
      price: 1800,
      discount: "15%",
    },
  ];

  return (
    <>
      <section className="product-details row">
        {productDetails.map((product, index) => (
          <div key={index} className="product-contents">
            <ImageCarousel images={product.productImages} />
            <ProductDetails
              title={product.productTitle}
              description={product.productDescription}
              price={product.price}
              actualPrice={product.actualPrice}
              discount={product.discount}
            />
          </div>
        ))}
      </section>
    </>
  );
}
