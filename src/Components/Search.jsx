import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const {name} = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const {meals} = await api.json();
    setItem(meals[0]);
  };
  return (
  <div className=" container mx-auto bg-base-200">
    <div className="flex flex-wrap grow lg:h-screen justify-center items-center gap-10  pb-16   pt-24">
    <img className=" w-[400px] rounded-lg px-4 h-[400px]" src={item.strMealThumb} loading="lazy" alt="" />
    <div className="w-full lg:w-[45%]">
      <h1 className=" text-extrabold my-2 text-2xl px-3">{item.strMeal} - {item.strCategory}</h1>
      
      <h3 className=" text-bold my-4 text-lg  px-3">Source <span className="text-blue-400">- <a href={item.strSource} >  {item.strSource}</a></span></h3>
      <p className=" text-justify leading-8 p-3">{item.strInstructions}</p>
    </div>
    </div>
  </div>
  );
};

export default Search;
