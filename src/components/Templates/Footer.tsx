import React from "react";
import { Images } from "@/Constants/ImageData.js";

export default function Footer() {
  return (
    <div className=" bg-PiBullet px-[7%] py-[3.5%] flex flex-col gap-[30px] font-poppins">
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col gap-[20px] flex-wrap">
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] font-semibold">
                Explore
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                Past Exam Papers
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                Tuition
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px]  hover:text-PiGradentto">
                Mock Exams
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                Affiliate Program
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                Consultancy
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto">
                Free Assessments
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] font-semibold">
                Exam Papers
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                Pre 11+
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                11+
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                13+
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                Pre-Tests
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] ">GCSE</p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto">
                SATs
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] font-semibold">
                Members
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                My Account
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                Contact Us
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] font-semibold">
                Call us at:
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                +44 (0) 7823 744504
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                Email us at:
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px]  hover:text-PiGradentto">
                Support@piacademy.co.uk
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                Follow us on:
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-12">
              <img
                src={Images.FACEBOOK_ICON.LINK}
                alt={Images.FACEBOOK_ICON.ALT}
              />
              <img src={Images.INSTA_ICON.LINK} alt={Images.INSTA_ICON.ALT} />
              <img
                src={Images.TWITTER_ICON.LINK}
                alt={Images.TWENTY_ICON.ALT}
              />
              <img
                src={Images.LINKIDIN_ICON.LINK}
                alt={Images.LINKIDIN_ICON.ALT}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] border-[1px] m-auto"></div>
      <div className="flex justify-between text-PiWhiteBackground flex-wrap">
        <div>
          <p>© 2014 - 2023 PiAcademy Limited, All Rights Reserved</p>
        </div>
        <div className=" flex gap-[50px] flex-wrap">
          <div>
            <p>Sitemap</p>
          </div>
          <div>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>Cookie Policy</p>
          </div>
          <div>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
