import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SingleDetailed from "./product/SingleDetailed";

export default function Product(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <SingleDetailed />
      {props.children}
      <Footer />
      {props.children}
    </>
  );
}
