import React from "react";
import SingleDetailed from "./product/SingleDetailed";

export default function Product(props) {
  return (
    <>
      <SingleDetailed />
      {props.children}
    </>
  );
}
