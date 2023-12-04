import React from "react";
import Header from "../headers/Header";
import Footer from "./Footer";
import HeroSection from "../novVerbalReasoiningPage/HeroSection";
import herosectionData from "../../Data/db.json";
import MainSection from "../novVerbalReasoiningPage/MainSection";
import { Images } from "@/Constants/ImageData.js";
import Access from "@/components/novVerbalReasoiningPage/Access";
import Faq from "../novVerbalReasoiningPage/Faq";
import Newsletter from "../novVerbalReasoiningPage/Newsletter";
import Ourpartner from "../novVerbalReasoiningPage/Ourpartner";

function NonVerbalReasoiningPage() {
  console.log("alldata", herosectionData);
  const Data = herosectionData.herosectionData;

  return (
    <div>
      <section className="font-poppins">
        <Header />
        <HeroSection
          subtitle={Data.title.subtitle}
          maintitle={Data.title.maintitle}
          desc={Data.description}
        />
        <Access
          dynamicText="NVR Practice Papers"
          backgroundColor="bg-PiCardMegaMenuHover"
          hideSection={true}
          textColor="text-PiBlack"
          spanText="11+"
        />
        <div className="hidden lg:block">
          <MainSection
            maindata={[
              {
                tabledata: [
                  "11+ NVR-Analogies Practice Papers 1",
                  "11+ NVR-Analogies Practice Papers 2",
                  "11+ NVR-Analogies Practice Papers 3",
                  "11+ NVR-Analogies Practice Papers 4",
                  "11+ NVR-Analogies Practice Papers 5",
                  "11+ NVR-Analogies Practice Papers 6",
                  "11+ NVR-Analogies Practice Papers 7",
                ],
                titledata: {
                  title1: "11+ NVR",
                  title2: "ANALOGIES",
                  Paper: "7 Test paper",
                  image: [
                    {
                      Imgsrc: Images.GROUP_ONE.LINK,
                      Imgalt: Images.GROUP_ONE.ALT,
                      Imghgt: Images.GROUP_ONE.HEIGHT,
                      Imgwdt: Images.GROUP_ONE.WIDTH,
                    },
                  ],
                },
                thead: "bg-PiDocument",
                maintitle: "11+ NVR ANALOGIES Practice Papers",
              },
              {
                tabledata: [
                  "11+ NVR-Analogies Practice Papers 1",
                  "11+ NVR-Analogies Practice Papers 2",
                  "11+ NVR-Analogies Practice Papers 3",
                  "11+ NVR-Analogies Practice Papers 4",
                  "11+ NVR-Analogies Practice Papers 5",
                  "11+ NVR-Analogies Practice Papers 6",
                  "11+ NVR-Analogies Practice Papers 7",
                ],
                titledata: {
                  title1: "11+ NVR",
                  title2: "ANALOGIES",
                  Paper: "7 Test Paper",
                  image: [
                    {
                      Imgsrc: Images.GROUP_ONE.LINK,
                      Imgalt: Images.GROUP_ONE.ALT,
                      Imghgt: Images.GROUP_ONE.HEIGHT,
                      Imgwdt: Images.GROUP_ONE.WIDTH,
                    },
                  ],
                },
                thead: "bg-PiDocument",
                maintitle: "11+ NVR ANALOGIES Practice Papers",
              },
              {
                tabledata: [
                  "11+ NVR-Series-Practice Papers 1",
                  "11+ NVR-Series-Practice Papers 2",
                  "11+ NVR-Series-Practice Papers 3",
                  "11+ NVR-Series-Practice Papers 4",
                  "11+ NVR-Series-Practice Papers 5",
                  "11+ NVR-Series-Practice Papers 6",
                  "11+ NVR-Series-Practice Papers 7",
                ],
                titledata: {
                  title1: "11+ NVR",
                  title2: "SERIES",
                  Paper: "7 Test Paper",
                  image: [
                    {
                      Imgsrc: Images.FRAME4_ICON.LINK,
                      Imgalt: Images.FRAME4_ICON.ALT,
                      Imghgt: Images.FRAME4_ICON.HEIGHT,
                      Imgwdt: Images.FRAME4_ICON.WIDTH,
                    },
                    {
                      Imgsrc: Images.FRAME5_ICON.LINK,
                      Imgalt: Images.FRAME5_ICON.ALT,
                      Imghgt: Images.FRAME5_ICON.HEIGHT,
                      Imgwdt: Images.FRAME5_ICON.WIDTH,
                    },
                    {
                      Imgsrc: Images.FRAME6_ICON.LINK,
                      Imgalt: Images.FRAME6_ICON.ALT,
                      Imghgt: Images.FRAME6_ICON.HEIGHT,
                      Imgwdt: Images.FRAME6_ICON.WIDTH,
                    },
                  ],
                },
                thead: "bg-PiFooter",
                maintitle: "11+ NVR SERIES Practice Papers",
              },
              {
                tabledata: [
                  "11+ NVR - Matrices - Practice Paper 1",
                  "11+ NVR - Matrices - Practice Paper 2",
                  "11+ NVR - Matrices - Practice Paper 3",
                  "11+ NVR - Matrices - Practice Paper 4",
                  "11+ NVR - Matrices - Practice Paper 5",
                  "11+ NVR - Matrices - Practice Paper 6",
                  "11+ NVR - Matrices - Practice Paper 7",
                ],
                titledata: {
                  title1: "11+ NVR",
                  title2: "MATRICES",
                  Paper: "7 Test Paper",
                  image: [
                    {
                      Imgsrc: Images.MATRIC1_ICON.LINK,
                      Imgalt: Images.MATRIC1_ICON.ALT,
                      Imghgt: Images.MATRIC1_ICON.HEIGHT,
                      Imgwdt: Images.MATRIC1_ICON.WIDTH,
                    },
                    {
                      Imgsrc: Images.MATRIC2_ICON.LINK,
                      Imgalt: Images.MATRIC2_ICON.ALT,
                      Imghgt: Images.MATRIC2_ICON.HEIGHT,
                      Imgwdt: Images.MATRIC2_ICON.WIDTH,
                    },
                  ],
                },
                thead: "bg-PiSpeed",
                maintitle: "11+ NVR MATRICES Practice Papers",
              },
              {
                tabledata: [
                  "11+ NVR - Odd One Out - Practice Paper 1",
                  "11+ NVR - Odd One Out - Practice Paper 2",
                  "11+ NVR - Odd One Out - Practice Paper 3",
                  "11+ NVR - Odd One Out - Practice Paper 4",
                  "11+ NVR - Odd One Out - Practice Paper 5",
                  "11+ NVR - Odd One Out - Practice Paper 6",
                  "11+ NVR - Odd One Out - Practice Paper 7",
                ],
                titledata: {
                  title1: "11+ NVR",
                  title2: "ODD ONE OUT",
                  Paper: "7 Test Paper",
                  image: [
                    {
                      Imgsrc: Images.FRAME10_ICON.LINK,
                      Imgalt: Images.FRAME10_ICON.ALT,
                      Imghgt: Images.FRAME10_ICON.HEIGHT,
                      Imgwdt: Images.FRAME10_ICON.WIDTH,
                    },
                    {
                      Imgsrc: Images.FRAME11_ICON.LINK,
                      Imgalt: Images.FRAME11_ICON.ALT,
                      Imghgt: Images.FRAME11_ICON.HEIGHT,
                      Imgwdt: Images.FRAME11_ICON.WIDTH,
                    },
                    {
                      Imgsrc: Images.FRAME13_ICON.LINK,
                      Imgalt: Images.FRAME13_ICON.ALT,
                      Imghgt: Images.FRAME13_ICON.HEIGHT,
                      Imgwdt: Images.FRAME13_ICON.WIDTH,
                    },
                  ],
                },
                thead: "bg-PiCardMegaMenuHover",
                maintitle: "11+ NVR ODD ONE OUT Practice Papers",
              },
              {
                tabledata: [
                  "11+ NVR - Folding & Punching - Practice Paper 1",
                  "11+ NVR - Folding & Punching - Practice Paper 2",
                  "11+ NVR - Folding & Punching - Practice Paper 3",
                ],
                titledata: {
                  title1: "11+ NVR",
                  title2: "FOLDING & PUNCHING",
                  Paper: "3 Test Paper",
                  image: [
                    {
                      Imgsrc: Images.GROUP_ONE.LINK,
                      Imgalt: Images.GROUP_ONE.ALT,
                      Imghgt: Images.GROUP_ONE.HEIGHT,
                      Imgwdt: Images.GROUP_ONE.WIDTH,
                    },
                  ],
                },
                thead: "bg-PiDocument",
                maintitle: "11+ NVR FOLDING & PUNCHING Practice Papers",
              },
            ]}
          />
        </div>
        <div className="block lg:hidden">
          <MainSection
            maindata={[
              {
                tabledata: [
                  "11+ NVR-Analogies Practice Papers 1",
                  "11+ NVR-Analogies Practice Papers 2",
                  "11+ NVR-Analogies Practice Papers 3",
                  "11+ NVR-Analogies Practice Papers 4",
                  "11+ NVR-Analogies Practice Papers 5",
                  "11+ NVR-Analogies Practice Papers 6",
                  "11+ NVR-Analogies Practice Papers 7",
                ],
                titledata: {
                  title1: "11+ NVR",
                  title2: "ANALOGIES",
                  Paper: "7 Test paper",
                  image: [
                    {
                      Imgsrc: Images.GROUP_ONE.LINK,
                      Imgalt: Images.GROUP_ONE.ALT,
                      Imghgt: Images.GROUP_ONE.HEIGHT,
                      Imgwdt: Images.GROUP_ONE.WIDTH,
                    },
                  ],
                },
                thead: "bg-PiDocument",
                maintitle: "11+ NVR ANALOGIES Practice Papers",
              },
              {
                tabledata: [
                  "11+ NVR-Series-Practice Papers 1",
                  "11+ NVR-Series-Practice Papers 2",
                  "11+ NVR-Series-Practice Papers 3",
                  "11+ NVR-Series-Practice Papers 4",
                  "11+ NVR-Series-Practice Papers 5",
                  "11+ NVR-Series-Practice Papers 6",
                  "11+ NVR-Series-Practice Papers 7",
                ],
                titledata: {
                  title1: "11+ NVR",
                  title2: "SERIES",
                  Paper: "7 Test Paper",
                  image: [
                    {
                      Imgsrc: Images.FRAME4_ICON.LINK,
                      Imgalt: Images.FRAME4_ICON.ALT,
                      Imghgt: Images.FRAME4_ICON.HEIGHT,
                      Imgwdt: Images.FRAME4_ICON.WIDTH,
                    },
                    {
                      Imgsrc: Images.FRAME5_ICON.LINK,
                      Imgalt: Images.FRAME5_ICON.ALT,
                      Imghgt: Images.FRAME5_ICON.HEIGHT,
                      Imgwdt: Images.FRAME5_ICON.WIDTH,
                    },
                    {
                      Imgsrc: Images.FRAME6_ICON.LINK,
                      Imgalt: Images.FRAME6_ICON.ALT,
                      Imghgt: Images.FRAME6_ICON.HEIGHT,
                      Imgwdt: Images.FRAME6_ICON.WIDTH,
                    },
                  ],
                },
                thead: "bg-PiFooter",
                maintitle: "11+ NVR SERIES Practice Papers",
              },
            ]}
          />
        </div>
        <Access
          dynamicText="Access all 11+ NVR Papers With Solutions"
          backgroundColor="bg-PiBullet"
          hideSection={false}
          textColor="text-PiWhiteBackground"
        />
        <Faq
          data={[
            { question: "What is 11 Plus Past Paper subscription plan?" },
            { question: "What are subscription benefits?" },
            { question: "How do I purchase subscription plan?" },
            { question: "Can I cancel my subscription?" },
            { question: "How are subscription renewed ?" },
            { question: "What is subscription term ?" },
          ]}
        />
        <Newsletter />
        <Ourpartner />
        <Footer />
      </section>
    </div>
  );
}

export default NonVerbalReasoiningPage;
