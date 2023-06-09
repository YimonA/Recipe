import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Meal from "./Meal";
import Random from "./Random";

const Hero = () => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    const data = await api.json();
    setRecipe(data.meals[0]);
    console.log(data.meals[0]);
  };

  return (
    <div className=" border-box bg-base-200 pt-24 pb-16 ">
      <div className="container mx-auto hero ">
        <div className="hero-content flex-col lg:flex-row-reverse px-5 lg:gap-20 my-6">
          <img
            src={recipe.strMealThumb}
            className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full shadow-2xl object-cover mx-6"
            loading="lazy"
          />
          <div>
            <h1 className="lg:text-6xl sm:text-3xl lg:tracking-wide font-bold mb-4 tracking-wide">
              {recipe.strMeal}
            </h1>
            <p className=" max-h-48 text-justify text-clip leading-8 overflow-hidden mb-6">
              {recipe.strInstructions}
            </p>

            <button className="btn btn-primary ">Get Started</button>
          </div>
        </div>
      </div>
      <Random />
      <div className=" container mx-auto flex justify-center py-4 mb-4">
        <Link to={"/meal"} element={<Meal />}>
          <button className="btn btn-outline btn-primary">All Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
