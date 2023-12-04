import React from "react";
import { Images } from "@/Constants/ImageData.js";
import Link from "next/link";
function MainSection({ maindata }: any) {
  const thead = maindata[0].thead;

  const containerClasses = thead
    ? `px-7 py-5 ${thead} text-[18px] border border-PiBorder`
    : "";
  return (
    <div>
      {!maindata ? (
        <></>
      ) : (
        maindata.map((item: any) => (
          <div className="flex flex-col sm:flex-row justify-between w-[90%] m-auto gap-x-7 py-[30px]">
            <div className="flex flex-col w-full sm:w-[35%] shadow-PiDropshadow items-center font-[700] text-[24px] p-5 h-[30%] rounded-[12px] my-7">
              <p className="text-PiBlack">
                {item.titledata.title1}{" "}
                <span className="text-PiBullet"> {item.titledata.title2}</span>
              </p>
              <p className="text-PiGrey py-5"> {item.titledata.Paper}</p>
              <div className="flex justify-center gap-2 items-center">
                {item?.titledata.image ? (
                  item.titledata.image.map((imgitem: any, index: number) => (
                    <img
                      key={index}
                      src={imgitem.Imgsrc}
                      alt={imgitem.Imgalt}
                    />
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="w-full sm:w-[63%] rounded-lg">
              <table className="border border-PiBorder w-full text-left rounded-lg">
                <thead
                  className={`px-7 py-5 ${item.thead} text-[18px] border border-PiBorder`}
                >
                  <tr className={`border border-PiBorder`}>
                    <th className="px-7 py-5">{item.maintitle}</th>
                    <th className="px-7 py-5">Detailed Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {item?.tabledata ? (
                    item.tabledata.map((item2: any, index: number) => (
                      <tr
                        key={index}
                        className="text-[18px] border border-PiBorder"
                      >
                        <td className="px-7 py-5">
                          <Link
                            href="#"
                            className="flex justify-start items-center"
                          >
                            <img
                              src={Images.PDF_ICON.LINK}
                              alt={Images.PDF_ICON.ALT}
                            />
                            <p className="text-PiBlack px-2">{item2}</p>
                          </Link>
                        </td>
                        <td className="px-7 py-5 flex items-center justify-start">
                          <Link
                            href="#"
                            className="flex justify-center flex-wrap gap-2"
                          >
                            <img
                              src={Images.LOCK_ICON.LINK}
                              alt={Images.LOCK_ICON.ALT}
                            />

                            <p className="text-PiGrey px-2">Answers</p>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default MainSection;
