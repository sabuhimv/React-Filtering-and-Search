import React from "react";
import "../Products/Products.css";
import Card from "../components/Card";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

const Products = ({result}) => {
  return (
    <section className="card-container">
     {result}
    </section>
  );
};

export default Products;
