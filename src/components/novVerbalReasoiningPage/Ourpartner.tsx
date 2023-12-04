import React from "react";
import { Images } from "@/Constants/ImageData.js";

export default function Ourpartner() {
  return (
    <div className="px-[7%] py-[3.5%] flex justify-between flex-wrap w-[90%] m-auto">
      <div className="flex flex-col gap-[20px] w-[93%] lg:w-[40%] ">
        <div className="flex gap-[15px]">
          <img src={Images.PILOGO_ICON.LINK} alt={Images.PILOGO_ICON.ALT} />
          <img
            src={Images.PILOGOTEXT_ICON.LINK}
            alt={Images.PILOGOTEXT_ICON.ALT}
          />
        </div>
        <h2 className=" text-[24px] font-bold pt-[15px] font-poppins ">
          More than
          <span className=" text-PiGradentto justify-center">
            {" "}
            20,000{" "}
          </span>{" "}
          Registered Members!
        </h2>
        <p className="text-[18px] font-poppins  ">
          PiAcademy is the #1 site on the internet to prepare for the 7+, 8+,
          9+, 10+, 11+, 13+, Pre-Tests, GCSEs, and other competitive exams in
          the UK. Exam Past Papers, practice papers with detailed answers. Used
          by parents tutors & schools all over the UK.
        </p>
        <div className="flex gap-[10px]">
          <img
            src={Images.HERORATING_ICON.LINK}
            alt={Images.HERORATING_ICON.ALT}
          />
          <p className="font-[600]">4.5</p>
        </div>
      </div>
      <div className=" border-[1px] h-[17rem] hidden xl:block"></div>
      <div className="flex flex-col justify-start items-center">
        <p className=" text-[48px] font-bold xl:mb-[50px] whitespace-nowrap my-4">
          Our
          <span className=" text-PiGradentto"> Partners </span>{" "}
        </p>
        <div className="flex xs:flex-nowrap gap-[20px] lg:gap-[70px] ">
          <div>
            <img src={Images.QT.LINK} alt={Images.QT.ALT} />
          </div>
          <div>
            <img src={Images.TALTER.LINK} alt={Images.TALTER.ALT} />
          </div>
        </div>
      </div>
    </div>
  );
}
