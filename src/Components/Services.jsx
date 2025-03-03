import React, { useRef } from "react";
import image from "../assets/ServImages/serv3.png";
import icon from "../assets/ServIcons/icon.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {
  const ServiceCard = [
    {
      id: 0,
      image: image,
      icon: icon,
      title: "Affordable Solution",
      description: "Receive top-quality design services without high price tag",
    },
    {
      id: 1,
      image: image,
      icon: icon,
      title: "Affordable Solution",
      description: "Receive top-quality design services without high price tag",
    },
    {
      id: 2,
      image: image,
      icon: icon,
      title: "Affordable Solution",
      description: "Receive top-quality design services without high price tag",
    },
    {
      id: 3,
      image: image,
      icon: icon,
      title: "Affordable Solution",
      description: "Receive top-quality design services without high price tag",
    },
    {
      id: 4,
      image: image,
      icon: icon,
      title: "Affordable Solution",
      description: "Receive top-quality design services without high price tag",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 },
    }),
  };

  const cardStyle =
    "relative flex flex-col justify-center mx-auto w-fit px-12 bg-secondary rounded-2xl border border-[#404138]/50 pt-10";
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <>
      <div className="container flex flex-col justify-center items-center">
        <div className="flex justify-center mx-auto mt-24">
          <h1 className="px-5 py-3 text-primary border border-[#404138]/50 bg-secondary font-urbanist rounded-full text-sm tracking-wide font-thin">
            WHAT YOU'LL RECEIVE
          </h1>
        </div>
        <div className="mt-7 mb-12">
          <p className="text-center text-[#CCCCCC] font-urbanist text-xl md:text-3xl lg:text-4xl max-w-xl">
            We solve the challenges that come with creative processes.
          </p>
        </div>
      </div>

      <div
        className="container mb-20 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5"
        ref={ref}
      >
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="md:col-span-2"
        >
          <div className={cardStyle}>
            <div className="absolute left-8 top-8 rounded-full bg-[#2C2F16] border border-[#444D13] w-fit p-4">
              <img
                src={ServiceCard[0].icon}
                className="size-8"
                alt="Service Icon"
              />
            </div>
            <img
              src={ServiceCard[0].image}
              className="flex justify-center items-center mx-auto w-56 pt-10"
            />
            <h1 className="font-urbanist text-[#CCCCCC] text-2xl mt-7 tracking-wide mb-3">
              {ServiceCard[0].title}
            </h1>
            <p className="font-urbanist text-[#757575] text-xl font-thin max-w-sm mb-7 tracking-wide">
              {ServiceCard[0].description}
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="md:col-span-2"
        >
          <div className={cardStyle}>
            <div className="absolute left-8 top-8 rounded-full bg-[#2C2F16] border border-[#444D13] w-fit p-4">
              <img
                src={ServiceCard[0].icon}
                className="size-8"
                alt="Service Icon"
              />
            </div>
            <img
              src={ServiceCard[1].image}
              className="flex justify-center items-center mx-auto w-56 pt-10"
            />
            <h1 className="font-urbanist text-[#CCCCCC] text-2xl mt-7 tracking-wide mb-3">
              {ServiceCard[1].title}
            </h1>
            <p className="font-urbanist text-[#757575] text-xl font-thin max-w-sm mb-7 tracking-wide">
              {ServiceCard[1].description}
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="lg:col-start-5 md:col-start-1 md:col-span-2"
        >
          <div className={cardStyle}>
            <div className="absolute left-8 top-8 rounded-full bg-[#2C2F16] border border-[#444D13] w-fit p-4">
              <img
                src={ServiceCard[0].icon}
                className="size-8"
                alt="Service Icon"
              />
            </div>
            <img
              src={ServiceCard[2].image}
              className="flex justify-center items-center mx-auto w-56 pt-10"
            />
            <h1 className="font-urbanist text-[#CCCCCC] text-2xl mt-7 tracking-wide mb-3">
              {ServiceCard[2].title}
            </h1>
            <p className="font-urbanist text-[#757575] text-xl font-thin max-w-sm mb-7 tracking-wide">
              {ServiceCard[2].description}
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={4}
          className="md:col-span-2 lg:col-span-3"
        >
          <div
            className={`relative flex flex-col lg:flex-row justify-center mx-auto px-12 w-fit bg-secondary rounded-2xl border border-[#404138]/50 pt-10 lg:pb-6  res-padding`}
          >
            <div className="absolute left-8 top-8 rounded-full bg-[#2C2F16] border border-[#444D13] p-4">
              <img
                src={ServiceCard[0].icon}
                className="size-8"
                alt="Service Icon"
              />
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center md:items-baseline lg:items-end">
              <img
                src={ServiceCard[3].image}
                className={`flex md:justify-center md:items-center md:mx-auto lg:items-end w-56 pt-10 lg:pt-0 res-img`}
              />
              <div className="flex flex-col justify-end lg:pb-8">
                <h1 className="font-urbanist text-[#CCCCCC] text-2xl mt-7 tracking-wide mb-3 res-h1">
                  {ServiceCard[3].title}
                </h1>
                <p className="font-urbanist text-[#757575] text-lg font-thin mb-7 max-w-sm lg:mb-0 tracking-wide res-p">
                  {ServiceCard[3].description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={5}
          className="md:col-span-4 lg:col-span-3"
        >
          <div
            className={
              "relative flex flex-col-reverse md:flex-row w-fit md:w-full  justify-center mx-auto bg-secondary rounded-2xl border border-[#404138]/50 px-12 pt-10 pb-6 res-padding"
            }
          >
            <div className="absolute left-8 top-8 rounded-full bg-[#2C2F16] border border-[#444D13] p-4">
              <img
                src={ServiceCard[0].icon}
                className="size-8"
                alt="Service Icon"
              />
            </div>
            <div className="flex flex-col justify-end ">
              <h1 className="font-urbanist text-[#CCCCCC] text-2xl mt-7 tracking-wide mb-3 res-h1">
                {ServiceCard[4].title}
              </h1>
              <p className="font-urbanist text-[#757575] max-w-sm text-lg font-thin mb-7 tracking-wide res-p">
                {ServiceCard[4].description}
              </p>
            </div>
            <img
              src={ServiceCard[4].image}
              className="flex justify-center items-center mx-auto w-56 res-img"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Services;
