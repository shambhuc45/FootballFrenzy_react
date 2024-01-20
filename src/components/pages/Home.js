import React from "react";
import Navbar from "../Navbar";
import Herosection from "./home/Herosection";
import Categories from "./home/Categories";
import RequestForm from "./home/RequestForm";
import Footer from "../Footer";
export default function Home(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Herosection />
      {props.children}
      <Categories />
      {props.children}
      <RequestForm />
      {props.children}
      <Footer />
      {props.children}
    </>
  );
}
