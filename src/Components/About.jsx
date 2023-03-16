import React from "react";

const About = () => {
  return (
    <div className=" container mx-auto flex flex-col grow h-full pt-24 pb-4 bg-base-200">
      <div className=" flex flex-wrap justify-around items-center gap-10 mb-10">
        <img
          src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
          className=" w-full lg:w-[45%] max-h-[300px] lg:max-h-[500px] object-cover rounded-lg shadow lg:shadow-2xl p-3"
          alt=""
        />
        <div className="w-full lg:w-[45%] p-10">
        <div>
          <h1 className=" text-extrabold mb-4 text-2xl text-center">
            Our Story
          </h1>
          <p className=" text-justify lg:indent-24 indent-6 p-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            fugit repudiandae unde. Modi et deleniti cupiditate vitae facilis,
            consequatur velit nemo perspiciatis voluptates totam similique
            assumenda. Neque nulla illo repudiandae. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Repudiandae architecto debitis culpa
            consequatur ratione neque hic sed consequuntur autem velit, earum
            unde vero magnam quaerat sit eligendi, omnis doloremque alias.
          </p>
        </div>
        <div>
          <h1 className="text-extrabold mb-4 text-2xl text-center">
            Our Mission
          </h1>
          <p className=" text-justify lg:indent-24 indent-6 p-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            fugit repudiandae unde. Modi et deleniti cupiditate vitae facilis,
            consequatur velit nemo perspiciatis voluptates totam similique
            assumenda. Neque nulla illo repudiandae. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Repudiandae architecto debitis culpa
            consequatur ratione neque hic sed consequuntur autem velit, earum
            unde vero magnam quaerat sit eligendi, omnis doloremque alias.
          </p>
        </div>
        <div>
          <h1 className="text-extrabold mb-4 text-2xl text-center">
            Our Vision
          </h1>
          <p className=" text-justify lg:indent-24 indent-6 p-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            fugit repudiandae unde. Modi et deleniti cupiditate vitae facilis,
            consequatur velit nemo perspiciatis voluptates totam similique
            assumenda. Neque nulla illo repudiandae. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Repudiandae architecto debitis culpa
            consequatur ratione neque hic sed consequuntur autem velit, earum
            unde vero magnam quaerat sit eligendi, omnis doloremque alias.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
