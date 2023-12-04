import React from "react";
import { Images } from "@/Constants/ImageData.js";
function Banner() {
  return (
    <div className="flex justify-center items-center gap-[10px] lg:px-[60px] bg-PiBullet py-[10px] font-[600]">
      <div className="flex gap-[10px]">
        <img src={Images.TROPHY_ICON.LINK} alt={Images.TROPHY_ICON.ALT} />
        <p className="text-PiWhiteBackground text-[13px] lg:text-[16px]">
          FREE 6_Days Trial <span className="font-[100]">11+ Exam Tution.</span>{" "}
          Book Now
        </p>
      </div>
      <div className="w-[1px] h-[24px] bg-PiWhiteBackground mx-[20px] md:block hidden"></div>
      <div className="hidden gap-[10px] md:flex">
        <img src={Images.FLASH_ICON.LINK} alt={Images.FLASH_ICON.LINK} />
        <p className="text-PiWhiteBackground">
          11+ Exam Revision Courses{" "}
          <span className="font-[100]">Filling Fast</span>
        </p>
      </div>
    </div>
  );
}
export default Banner;
