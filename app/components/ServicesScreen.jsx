import { motion } from "framer-motion";


import Illustration_1 from "../../public/images/Illustration_1.png";
import Illustration_2 from "../../public/images/Illustration_2.png";
import Illustration_3 from "../../public/images/Illustration_3.png";
import Illustration_4 from "../../public/images/Illustration_4.png";
import Illustration_5 from "../../public/images/Illustration_5.png";
import Illustration_6 from "../../public/images/Illustration_6.png";

import { ArrowUpRight } from "lucide-react";

import Image from "next/image";

function ServicesScreen() {
    const animationPreset = {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.5 },
      transition: { duration: 0.5, ease: "linear" },
    };
  
    const services = [
      {
        text_1: "Search engine",
        text_2: "optimization",
        image: Illustration_1,
        color: "grey-color",
        text_bg_color: "green-color",
        btn_bg_color: "dark-color",
        arrow_color: "green-color",
      },
      {
        text_1: "Pay-per-click",
        text_2: "advertising",
        image: Illustration_2,
        color: "green-color",
        text_bg_color: "white",
        btn_bg_color: "dark-color",
        arrow_color: "green-color",
      },
      {
        text_1: "Social Media",
        text_2: "Marketing",
        image: Illustration_3,
        color: "dark-color",
        text_bg_color: "white",
        btn_bg_color: "white",
        arrow_color: "dark-color",
      },
      {
        text_1: "Email",
        text_2: "Marketing",
        image: Illustration_4,
        color: "grey-color",
        text_bg_color: "green-color",
        btn_bg_color: "dark-color",
        arrow_color: "green-color",
      },
      {
        text_1: "Content",
        text_2: "Creation",
        image: Illustration_5,
        color: "green-color",
        text_bg_color: "white",
        btn_bg_color: "dark-color",
        arrow_color: "green-color",
      },
      {
        text_1: "Analytics and",
        text_2: "Tracking",
        image: Illustration_6,
        color: "dark-color",
        text_bg_color: "green-color",
        btn_bg_color: "white",
        arrow_color: "dark-color",
      },
    ];
  
    // Map your custom colors to Tailwind classes
    const colorMap = {
      "grey-color": "bg-grey-color",
      "green-color": "bg-green-color",
      "dark-color": "bg-dark-color",
      white: "bg-white",
    };
    // const arrowColorMap = {
    //   "grey-color": "stroke-grey-color",
    //   "green-color": "stroke-green-color",
    //   "dark-color": "stroke-dark-color",
    //   white: "stroke-white",
    // }
    return (
      <>
        <div className="services-wrapper my-20 flex flex-col gap-10">
          <motion.div
            {...animationPreset}
            className="services-top flex items-center h-[60px] gap-7  max-lg:flex-col max-lg:h-auto">
            <p className="h2 px-2 h-full bg-green-color rounded-[15px] font-black text-center">
              Services
            </p>
            <p className="p">
              At our digital marketing agency, we offer a range of services to{" "}
              <br /> help businesses grow and succeed online. These services include:
            </p>
          </motion.div>
          <div className="services-body grid grid-cols-2 gap-10 max-lg:grid-cols-1 ">
            {services.map((card, i) => (
              <motion.div 
              key={i}
              {...animationPreset}
                className={`card-style max-lg:mx-auto max-lg:max-w-[550px] max-w-[750px] w-full h-[350px] ${colorMap[card.color]} p-10 flex justify-between `}
              >
                <div className="left flex flex-col items-start">
                  <p className={`h3 px-2 rounded-[10px] ${colorMap[card.text_bg_color]}`}>
                    {card.text_1}
                  </p>
                  <p className={`h3 px-2 rounded-[10px] ${colorMap[card.text_bg_color]}`}>
                    {card.text_2}
                  </p>
                  <button className="flex cursor-pointer items-center gap-2 mt-auto">
                    <div className={` ${colorMap[card.btn_bg_color]} w-[40px] h-[40px] flex items-center justify-center rounded-full`}>
                    <ArrowUpRight className={`stroke-${card.arrow_color}`}/>
                    </div>
                    <p className={"h4"+ (card.color === "dark-color" ? " text-white" : "")}>Lear More</p>
                  </button>
                </div>
                <div className="right h-full flex items-center max-xl:items-end">
                    <Image src={card.image} className="w-[210px] h-[192px]  max-xl:w-[170px]  max-xl:h-[150px]  object-contain" alt="illustration" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default ServicesScreen;