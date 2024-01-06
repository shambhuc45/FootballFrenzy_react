import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";

export default function Categories() {
  const [activeBtn, setActiveBtn] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const buttonData = useMemo(
    () => [
      {
        id: "featured",
        btnText: "Featured",
      },
      {
        id: "topSelling",
        btnText: "Top Sellings",
      },
      {
        id: "allJersey",
        btnText: "All Jerseys",
      },
      {
        id: "graphicTees",
        btnText: "Graphic T-shirts",
      },
      {
        id: "phoneCase",
        btnText: "Phone Case",
      },
      {
        id: "ornaments",
        btnText: "Ornaments",
      },
    ],
    []
  );
  const products = useMemo(
    () => [
      {
        image: "images/arsenal.png",
        name: "Arsenal Modified Jersey",
        category: ["allJersey", "topSelling"],
        actualPrice: 2100,
        price: 1700,
        rating: 5,
      },
      {
        image: "images/barca home.png",
        name: "Barcelona Home 23/24",
        category: ["allJersey", "topSelling", "featured"],
        actualPrice: 2200,
        price: 1800,
        rating: 5,
      },
      {
        image: "images/barca home.png",
        name: "Barcelona Home 23/24",
        category: ["allJersey", "topSelling", "featured"],
        actualPrice: 2200,
        price: 1800,
        rating: 5,
      },
      {
        image: "images/barca home.png",
        name: "Barcelona Home 23/24",
        category: ["allJersey", "topSelling", "featured"],
        actualPrice: 2200,
        price: 1800,
        rating: 5,
      },
      {
        image: "images/barca home.png",
        name: "Barcelona Home 23/24",
        category: ["allJersey", "topSelling", "featured"],
        actualPrice: 2200,
        price: 1800,
        rating: 5,
      },
      {
        image: "images/barca home.png",
        name: "Barcelona Home 23/24",
        category: ["allJersey", "graphicTees", "featured"],
        actualPrice: 2200,
        price: 1800,
        rating: 5,
      },
      {
        image: "images/barca home.png",
        name: "Barcelona Home 23/24",
        category: ["allJersey", "graphicTees", "featured"],
        actualPrice: 2200,
        price: 1800,
        rating: 0,
      },
      {
        image: "images/barca home.png",
        name: "Barcelona Home 23/24",
        category: ["allJersey", "graphicTees", "featured"],
        actualPrice: 2200,
        price: 1800,
        rating: 5,
      },
      {
        image: "images/barca home.png",
        name: "Barcelona Home 23/24",
        category: ["graphicTees", "topSelling", "featured"],
        actualPrice: 2200,
        price: 1800,
        rating: 5,
      },
      {
        image: "images/barca home.png",
        name: "Barcelona Home 23/24",
        category: ["phoneCase", "topSelling", "featured"],
        actualPrice: 2200,
        price: 1800,
        rating: 1,
      },
      {
        image: "images/barca home.png",
        name: "Barcelona Home 23/24",
        category: ["ornaments", "topSelling", "featured"],
        actualPrice: 2200,
        price: 1800,
        rating: 5,
      },
      {
        image: "images/barca home.png",
        name: "Barcelona Home 23/24",
        category: ["phoneCase", "topSelling"],
        actualPrice: 2200,
        price: 1800,
        rating: 2,
      },
      {
        image: "images/barca home.png",
        name: "Barcelona Home 23/24",
        category: ["Ornaments", "topSelling"],
        actualPrice: 2200,
        price: 1800,
        rating: 3,
      },
      {
        image: "images/barca home.png",
        name: "Barcelona Home 23/24",
        category: ["phoneCase", "topSelling"],
        actualPrice: 2200,
        price: 1800,
        rating: 4,
      },
    ],
    []
  );
  useEffect(() => {
    const initialFilteredProducts = products.filter((product) =>
      product.category.includes("featured")
    );
    setFilteredProducts(initialFilteredProducts);
  }, []);
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.category.includes(activeBtn)
    );
    setFilteredProducts(filtered);
  }, [activeBtn, products]);
  return (
    <>
      <section className="categories row">
        <hr className="hor-line-small" />
        <div className="categories__container">
          <div className="categories__container--btngroup margin-bottom-small">
            {buttonData.map((category) => (
              <button
                key={category.id}
                className={`btn-category ${
                  activeBtn === category.id ? "active" : ""
                }`}
                onClick={() => setActiveBtn(category.id)}
              >
                {category.btnText}
              </button>
            ))}
          </div>
          <div className="product flex">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                src={product.image}
                name={product.name}
                actualPrice={product.actualPrice}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
