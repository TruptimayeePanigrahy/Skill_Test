import React from "react";
import Button from "./Button";

export default function Newsletter() {
  return (
    <div className=" bg-PiFooter  m-auto py-[30px] flex flex-col gap-[30px] ">
      <div className="flex flex-col gap-[20px] w-[90%] m-auto">
        <h2 className=" text-[50px] font-bold pt-[15px] font-poppins text-center ">
          Subscribe to
          <span className=" text-PiGradentto justify-center"> Newsletter </span>
        </h2>
        <p className="text-[22px] font-poppins text-center">
          Get <span className=" text-PiGradentto justify-center"> 10% OFF</span>{" "}
          coupon code on your first order, valid sitewide.
        </p>
      </div>
      <div className="flex justify-center items-center gap-[30px] flex-wrap">
        <input
          type="text"
          placeholder="Your Email"
          className="p-[20px] rounded-xl w-[420px] border-2 m-2 lg:m-0"
        />
        <Button content={"Get Started"} />
      </div>
    </div>
  );
}
