import React from "react";
import Herosection from "./home/Herosection";
import Categories from "./home/Categories";
import RequestForm from "./home/RequestForm";
export default function Home(props) {
  return (
    <>
      <Herosection />
      {props.children}
      <Categories />
      {props.children}
      <RequestForm />
      {props.children}
    </>
  );
}
