import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" container mx-auto flex flex-wrap grow h-screen justify-around items-center pb-16 pt-24 px-4 bg-base-200">
      
      <div className="flex flex-col justify-around gap-5 items-center w-full lg:w-[45%] mt-4 ">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl lg:text-4xl text-extrabold text-center mb-4">Sign up for the newsletters</h3>
          <div className=" my-4 mx-auto">
            <input type="text" placeholder="Enter Email" className="input input-ghost input-sm max-w-xs bg-indigo-50" />
            <button className="btn btn-outline btn-sm btn-primary lg:ml-4  ml-2 mt-2">Subscribe Now</button>
          </div>
        </div>
        <div className="flex flex-col justify-around gap-5 items-center w-[80%] border-4 p-3 border-indigo-400 rounded-lg">
        <div className="flex flex-row w-full">
          <BiLocationPlus className=" text-2xl mr-4 text-indigo-600" />
          <p className=" max-w-[90%] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            minus consequatur sit nostrum fuga harum, nulla mollitia ipsa
            accusantium perspiciatis beatae natus. Rerum consectetur, velit
            porro sint facere atque magni.
          </p>
        </div>
        <div className="flex flex-row w-full">
          <BsTelephone className=" text-2xl mr-4 text-indigo-600" />
          <p>+959 123456789</p>
        </div>
      </div>
        <div className="flex flex-col w-full justify-center">
          <h1 className="text-xl text-center mb-4">Follow us on</h1>
          <div className=" flex justify-around items-center mx-auto">
            <BsTwitter className=" text-blue-400 text-2xl sm:text-md mx-8" />
            <BsYoutube className=" text-red-600 bg-white text-2xl sm:text-md mr-8" />
            <FaFacebookF className=" text-blue-700 text-2xl sm:text-md mr-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
