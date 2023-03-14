import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";

const Meal = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const { meals } = await api.json();
    setProducts(meals);
  };
  return (
    <div className=" flex flex-wrap gap-10 justify-center align-center pb-20 bg-base-200 pt-24" >
      {products?.map((product) => {
      return (
        <Card key={product.idMeal} product={product} name={product.strMeal} id={product.idMeal}/>
      )})}
    </div>
  );
};

export default Meal;
