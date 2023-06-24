import React from "react";

export const Testimonial = () => {
  return (
    <div className="bg-gray-100 p-8 shadow-sm rounded-xl md:flex">
      <img className="w-20 rounded-full mx-auto" src="images/profile.jpg" alt="" />
      <div className="pt-6 text-center psace-y-4">
        <div className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque praesentium suscipit labore saepe, dolore dolor totam quasi animi? Beatae error, accusantium velit itaque incidunt voluptate vero dicta excepturi cum?</div>
        <div className="font-medium">
          <p className="text-blue-600 font-bold">Lucas Santana</p>
        </div>
      </div>
    </div>
  );
};
