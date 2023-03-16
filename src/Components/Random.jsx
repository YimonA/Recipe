import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Random = () => {

  const [products,setProducts]=useState([]);

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
    <div className="container mx-auto flex flex-wrap gap-10 justify-center align-center py-4 bg-base-200">
      {products?.slice(0,3).map((product) => {
        return (
          <Card
            key={product.idMeal}
            product={product}
            name={product.strMeal}
            id={product.idMeal}
          />
        );
      })}
    </div>
  );
};

export default Random;
