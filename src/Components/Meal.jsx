import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import { AiOutlineLoading } from "react-icons/ai";

const Meal = () => {
  const [products, setProducts] = useState([]);
  const [icon, setIcon] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const { meals } = await api.json();
    setProducts(meals);
    setIcon(false);
  };
  return (
    <div className="bg-base-200">
      <div
        className={`${
          icon ? "block" : "hidden"
        } flex flex-col duration-700 justify-center items-center h-screen my-auto`}
      >
        <AiOutlineLoading
          className={`p-2 animate-spin h-16 w-16 text-indigo-400`}
        />
        <h3 className=" text-xl my-14">Loading</h3>
      </div>

      <div className=" flex flex-wrap gap-10 justify-center align-center pb-20 pt-24">
        {products?.map((product) => {
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
    </div>
  );
};

export default Meal;
