import React from "react";
import Profile from "@/components/Profile_1";
import { BsCart } from "react-icons/bs";

const Title = () => {
  return (
    <div className="flex h-16 items-center justify-between bg-white p-4 rounded shadow-md mb-4">
      <div className="flex items-center">
        <div className="bg-green-500 text-white py-2 px-4 rounded shadow-md mr-4">
          Delivery Address
        </div>
        <div className="text-black">KOMAS500</div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <span className="mr-1">
            <BsCart />
          </span>
          <span>Cart</span>
        </div>
        <div className="text-black">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Title;
