import React from "react";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Card.css"
import Detail from "./Detail";

const Card = ({ product }) => {
  const { strMeal, strMealThumb, idMeal } = product;
  
  return (
    <div>
      <div className=" relative myParent duration-700">
        <img className="myImage w-[300px] rounded-lg h-[300px]" loading="lazy" src={strMealThumb} alt="" />
        <div className="myIcon absolute top-[45%] left-[45%]">
          <Link to={`/detail/${idMeal}`}>
            <p className="   bg-indigo-500 w-12 h-12 rounded-[100%] flex justify-center items-center">
                <ImSearch className=" text-3xl text-white"/>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
/*
<p>{name}</p>

<div className="absolute top-[50%] left-[50%]">
<p className=" myIcon absolute top-[-50%] left-[-50%] bg-orange-400 w-12 h-12 rounded-[100%] flex justify-center items-center">
*/
