import React from "react";
import { Images } from "@/Constants/ImageData.js";
import Link from "next/link";
import Button from "./Button";
const HeroSection = ({ subtitle, maintitle, desc }: any) => {
  return (
    <div className="w-[90%] m-auto">
      {maintitle && subtitle ? (
        <h1 className="text-[48px] font-[700] text-center text-PiBlack py-[30px]">
          <span className="text-PiButton">{subtitle}</span> {maintitle}
        </h1>
      ) : (
        <></>
      )}
      <div className="flex justify-between flex-wrap gap-[2%] xs:gap-7">
        <div className="flex flex-col justify-between">
          <div className="text-[22px] flex flex-col gap-[20px]">
            {desc.length > 0 &&
              desc.map((item: any, index: any) => (
                <div key={index} className="flex items-center gap-2 py-2">
                  <img
                    src={Images.TICK_ICON.LINK}
                    alt={Images.TICK_ICON.ALT}
                    height={Images.TICK_ICON.HEIGHT}
                    width={Images.TICK_ICON.WIDTH}
                  />
                  <p className="text-[22px] font-[400]">{item}</p>
                </div>
              ))}
          </div>
          <div className="flex gap-[50px] flex-wrap justify-center ">
            <div className="flex flex-col gap-[10px] items-stretch flex-wrap justify-center">
              <div className="flex gap-[10px] flex-wrap justify-center ">
                <img
                  src={Images.HERORATING_ICON.LINK}
                  alt={Images.HERORATING_ICON.ALT}
                />
                <p className="text-[16px] font-[600]">4.9</p>
              </div>
              <div className="text-[18px] font-[600] ">
                <p>
                  <span className="text-PiBullet">15,000+ </span>Packs Sold
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]">
              <img src={Images.OFF_ICON.LINK} alt={Images.OFF_ICON.ALT} />
              <Button content={"Buy Now"} />
            </div>
          </div>
        </div>
        <div className="rounded-xl border-2 lg:my-0 mt-7">
          <div className="flex justify-between px-[17px] py-[10px] bg-PiCards rounded-t-xl rounded-r-xl">
            <div className="flex gap-[33px]">
              <p>Questions</p>
              <p className=" text-PiButton font-semibold">Answers</p>
            </div>
            <div className="flex">
              <img src={Images.TIMER_ICON.LINK} alt={Images.TIMER_ICON.ALT} />
              <p className=" bg-white">1m 30s</p>
            </div>
          </div>
          <div className="lg:px-[17px] lg:py-[10px] flex flex-col gap-[15px]">
            <p className="text-[16px]">
              19. The Formula for the area of a circle is A=πr2 .For the
              following task
              <br /> use π=3.14. Acircle of radius 10 cm is inside a square
              as...
            </p>
            <div className="flex justify-between">
              <div className="bg-PiBlack relative">
                <img
                  src={Images.CIRCLE_ICON.LINK}
                  alt={Images.CIRCLE_ICON.ALT}
                />
                <img src={Images.TWENTY_ICON.LINK} alt="" />
                <div className="absolute top-11 left-[50px]">
                  <img src={Images.TEN_ICON.LINK} alt={Images.TEN_ICON.ALT} />
                  <img src={Images.LINE_ICON.LINK} alt={Images.LINE_ICON.ALT} />
                </div>
              </div>
              <div>
                <img
                  src={Images.CALCULATION_ICON.LINK}
                  alt={Images.CALCULATION_ICON.ALT}
                />
                <img src={Images.AREA_ICON.LINK} alt={Images.AREA_ICON.ALT} />
              </div>
            </div>
            <hr />
            <div className="text-[13.5px] flex   lg:gap-[20px]">
              <p className="font-semibold">
                See Similar <span className=" text-PiButton"> Topics</span>{" "}
              </p>
              <div className="flex lg:gap-[15px] ">
                <button className="lg:px-[15px] mx-1 border border-PiBorder rounded-[8px]">
                  Algebra
                </button>
                <button className="lg:px-[15px] mx-1 border border-PiBorder rounded-[8px]">
                  Numbers
                </button>
                <button className="lg:px-[15px] mx-1  border border-PiBorder rounded-[8px]">
                  Multiplication
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-[20px] bg-PiFooter rounded-xl font-poppins py-[20px] my-[30px]">
        <div className="flex flex-col items-center gap-[10px] xl:border-r-[1px] text-center h-[9rem] border-PiBlack ">
          <img src={Images.SUCCESS_ICON.LINK} alt={Images.SUCCESS_ICON.ALT} />
          <p className="text-[22px]">95% Success Rate</p>
        </div>

        <div className="flex flex-col items-center gap-[10px] xl:border-r-[1px] border-PiBlack text-center h-[9rem]">
          <img src={Images.DOWNLOAD_ICON.LINK} alt={Images.DOWNLOAD_ICON.ALT} />
          <p className="text-[22px] hidden lg:block">Grade Tracker</p>
          <p className="text-[22px] underline text-PiBullet block lg:hidden">
            30,000+ Questions
          </p>
        </div>

        <div className="flex flex-col items-center gap-[10px] xl:border-r-[1px] border-black text-center h-[9rem]">
          <img
            src={Images.SMALLSIZE_ICON.LINK}
            alt={Images.SMALLSIZE_ICON.ALT}
          />
          <p className="text-[22px]">Designed by 11+ Experts</p>
        </div>

        <div className="flex flex-col items-center gap-[10px] text-center  h-[9rem]">
          <img
            src={Images.PASTPAPER_ICON.LINK}
            alt={Images.PASTPAPER_ICON.ALT}
          />
          <p className="text-[22px]">180+ Past Papers</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
