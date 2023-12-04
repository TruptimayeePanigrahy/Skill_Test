import React from "react";
import { Images } from "@/Constants/ImageData.js";
import Link from "next/link";
function Mainmenu() {
  return (
    <div className="flex justify-between lg:px-12  bg-PiWhiteBackground py-3">
      <div className="flex gap-[10px] justify-center items-center">
        <img
          src={Images.PILOGO_ICON.LINK}
          alt={Images.PILOGO_ICON.ALT}
          height={Images.PILOGO_ICON.HEIGHT}
          width={Images.PILOGO_ICON.WIDTH}
        />
        <img
          src={Images.PILOGOTEXT_ICON.LINK}
          alt={Images.PILOGOTEXT_ICON.ALT}
          height={Images.PILOGOTEXT_ICON.HEIGHT}
          width={Images.PILOGOTEXT_ICON.WIDTH}
        />
      </div>
      <div className="hidden gap-16 justify-center items-center md:flex">
        <Link href="#" className="group">
          Exam Papers
        </Link>
        <Link href="#" className="group">
          11+ Courses
        </Link>
        <Link href="#" className="group">
          11+ Tutions
        </Link>
        <Link href="#" className="group">
          Videos
        </Link>
        <Link href="#" className="group">
          Mock Exams
        </Link>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <img
          src={Images.PHONE_ICON.LINK}
          alt={Images.PHONE_ICON.ALT}
          height={Images.PHONE_ICON.HEIGHT}
          width={Images.PHONE_ICON.WIDTH}
        />
        <img
          src={Images.CONTACT_ICON.LINK}
          alt={Images.CONTACT_ICON.ALT}
          height={Images.CONTACT_ICON.HEIGHT}
          width={Images.CONTACT_ICON.WIDTH}
        />
        <img
          src={Images.CART_ICON.LINK}
          alt={Images.CART_ICON.ALT}
          height={Images.CART_ICON.HEIGHT}
          width={Images.CART_ICON.WIDTH}
        />
      </div>
    </div>
  );
}

export default Mainmenu;
