/* eslint-disable */
import { useRef } from "react";
import Button from "../Elements/Button";
import Hsatu from "../Elements/Hsatu";
import { motion } from "framer-motion";

export default function AboutUsLayout() {
  const scrollRef = useRef(null);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        animate={{}}
        viewport={{ root: scrollRef }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="md:w-1/3 w-full flex flex-col justify-center"
      >
        <Hsatu text="About Us" />
        <h1 className="font-rubik md:text-4xl text-3xl font-semibold mt-8 mb-4 text-blue-950 md:max-w-[450px]">
          How much is your property worth now?
        </h1>
        <p className="font-poppins max-w-[400px] text-sm text-slate-500 mb-8">
          We have built our reputation as true local area experts. We have
          gained more knowledge about buyer interests, our neighborhood and the
          market than any other brand because we live locally and work for local
          people.
        </p>
        <Button text="Learn More" variant="bg-mulih text-white text-sm w-fit" />
      </motion.div>
    </>
  );
}
