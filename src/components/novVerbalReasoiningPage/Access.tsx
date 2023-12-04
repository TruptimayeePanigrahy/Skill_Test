import React from "react";
import Button from "./Button";
import { Images } from "@/Constants/ImageData.js";

function Access({
  dynamicText,
  textColor,
  hideSection,
  backgroundColor,
  spanText,
}: any) {
  return (
    <div
      className={`flex justify-center lg:justify-between p-7 items-center ${
        backgroundColor ? backgroundColor : "bg-PiBullet"
      } w-[90%] m-auto rounded-lg flex-wrap `}
    >
      <div className="flex flex-col item-center justify-center lg:items-start  gap-5">
        <>
          {dynamicText && (
            <>
              <div className="flex justify-between">
                <div>
                  <p
                    className={`text-center font-[700] ${
                      textColor ? textColor : ""
                    } ${
                      hideSection
                        ? "text-[16px] lg:text-[36px]"
                        : "text-[36px] lg:text-[36px]"
                    }`}
                  >
                    {spanText && (
                      <span className="text-PiButton">{spanText}</span>
                    )}
                    {dynamicText}
                  </p>
                </div>
                {hideSection && (
                  <div className="block lg:hidden">
                    <img
                      src={Images.YEAR_ICON.LINK}
                      alt={Images.YEAR_ICON.ALT}
                      className="mx-5 mt-2"
                    />
                    <img
                      src={Images.MSG_ICON.LINK}
                      alt={Images.MSG_ICON.ALT}
                      className="ml-[90px]"
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </>

        {!hideSection && (
          <div className="flex flex-col lg:flex-row sm:items-center  lg:gap-5 sm:justify-center ">
            <div className="flex justify-center items-center">
              <img
                src={Images.HERORATING_ICON.LINK}
                alt={Images.HERORATING_ICON.ALT}
                height={Images.HERORATING_ICON.HEIGHT}
                width={Images.HERORATING_ICON.WIDTH}
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-PiWhiteBackground font-[600] mx-1 my-4">
                8000+ Packs Sold
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4">
        <Button content={"Buy Now"} />
      </div>
    </div>
  );
}

export default Access;
