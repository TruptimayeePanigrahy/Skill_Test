import { Images } from "@/Constants/ImageData";
import React from "react";

function Faq({ data }: any) {
  return (
    <div className="flex flex-col justify-center items-center w-[90%] m-auto my-7 bg-PiGreyBackground gap-12 p-4">
      <p className="text-PiBlack  text-[48px] font-[700] text-center">
        Frequently <span className="text-PiButton">Asked</span> Questions
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  ">
        {data ? (
          data.map((item: any, index: any) => (
            <div
              key={index}
              className="flex justify-between items-center gap-4 py-5 px-7 border border-PiCardMegaMenuHover rounded-lg bg-PiWhiteBackground "
            >
              <p className="text-[22px]">{item.question}</p>
              <img src={Images.DROPDOWN.LINK} alt={Images.DROPDOWN.LINK} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Faq;
