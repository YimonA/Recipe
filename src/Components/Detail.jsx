import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import "./Detail.css"

const Detail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [ingre, setIngre] = useState([]);
  const [instruction,setInstruction]=useState(true);
  const [ingredient,setIngredient]=useState(false);


  useEffect(() => {
    fetchData();
  }, []);
  
  useEffect(() => {
    const ingredients = [
      { id: 1, name: recipe.strIngredient1 },
      { id: 2, name: recipe.strIngredient2 },
      { id: 3, name: recipe.strIngredient3 },
      { id: 4, name: recipe.strIngredient4 },
    ];
    setIngre(ingredients);
    console.log(ingredients)
  }, [recipe]);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await api.json();
    setRecipe(data.meals[0]);
    console.log(data.meals[0]);
  };

  const checkIngredient=()=>{
    setIngredient(true);
    setInstruction(false);
  }
  const checkInstruction=()=>{
    setIngredient(false);
    setInstruction(true);
  }
    
  return (
    <div className=" container mx-auto flex flex-wrap grow lg:h-screen justify-around gap-6 items-center pt-24 pb-24 bg-base-200">
      <img className=" w-[350px] h-[350px] lg:w-[500px] rounded-lg pt-4" src={recipe.strMealThumb} alt="" />

      <div className=" w-[100%] lg:w-[50%] p-2 my-1 px-6">
        <h3 className=" text-3xl text-gray-600 font-semibold tracking-wide my-3">
          {recipe.strMeal}
        </h3>
        <h3 className=" text-2xl text-gray-600 font-semibold tracking-wide mb-2">
          {recipe.strCategory} - {recipe.strArea}
        </h3>
        <a href={recipe.strYoutube}>
          <BsYoutube className="text-4xl text-red-500 my-4" />
        </a>
        <button onClick={ checkInstruction} className={` bg-indigo-500 px-6 py-1 text-white rounded shadow mr-2 mb-2`}  >Instruction</button>
        <button onClick={ checkIngredient} className={`  bg-indigo-500 px-6 py-1 text-white rounded shadow mr-2`} >Ingredients</button>
        <p className={` ${instruction ? "block": "hidden"} text-gray-500 tracking-wide leading-8 my-4 text-justify lg:indent-24 indent-6 sm:max-h-96`} >
          {recipe.strInstructions}
        </p>
        <div className={`${ ingredient ? "border-4 border-indigo-400 p-4 pb-24 mt-4 md:w-[50%] ":""} `}>
        {ingre?.map((item) => {
          return (
            <div key={item.id} className={`${ ingredient ? "block":"hidden"} p-1`}>
              <p className=" text-lg">{item.name}</p>
            </div>
          );
        })}
        </div>
        
      </div>
    </div>
  );
};

export default Detail;
