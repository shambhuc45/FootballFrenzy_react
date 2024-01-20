import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Categories() {
  const [activeBtn, setActiveBtn] = useState("featured");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
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
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
      console.log("prouct are" + products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
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
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { productDetails: product } });
  };
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
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                src={product.productImages[0]}
                productTitle={product.productTitle}
                actualPrice={product.actualPrice}
                price={product.price}
                rating={product.rating}
                onClick={handleProductClick}
                productDetails={product}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
