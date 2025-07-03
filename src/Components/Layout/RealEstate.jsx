/* eslint-disable */
import { useRef } from "react";
import Hsatu from "../Elements/Hsatu";
import BuyRent from "../Fragments/BuyRent";
import { motion } from "framer-motion";

export default function RealEstate() {
  const scrollRef = useRef(null);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className=" py-10 px-3"
      >
        <Hsatu text="Real Estate"></Hsatu>
        <h1 className="font-rubik text-4xl font-semibold my-6 text-blue-950 max-w-[400px]">
          Let's hunt for your dream residence
        </h1>
        <p className="font-poppins max-w-[450px] md:text-sm text-xs text-slate-500 mt-2">
          Explore our range of beautiful properties with the addition of
          separate accommodation suitable for you.
        </p>
        <BuyRent />
      </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="2 md:absolute relative lg:w-[48vw] md:w-[90vw] w-[100vw] z-10 md:block right-0 md:bottom-0 -bottom-10"
        >
          <img className="object-cover" src="public/assets/house.png" alt="Home" />
        </motion.div>
    </>
  );
}
