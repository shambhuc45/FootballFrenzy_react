import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchResults() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { productDetails: product } });
  };
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products?q=${searchQuery}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);
  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      <div className="product flex">
        {searchResults.map((product) => (
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
  );
}
