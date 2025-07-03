/* eslint-disable */
import { useRef } from "react";
import Hsatu from "../Components/Elements/Hsatu";
import ServiceCard from "../Components/Fragments/ServiceCard";
import { motion } from "framer-motion";

export default function Services() {
    const scrollRef = useRef(null);
  return (
    <>
      <div className="md:px-20 px-8 py-12 bg-slate-100" id="service">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          animate={{}}
          viewport={{ root: scrollRef }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Hsatu text="Our Advante" />
          <h1 className="font-rubik md:text-4xl text-3xl md:text-left text-center font-semibold my-8 text-blue-950">
            Giving you peace of mind
          </h1>
        </motion.div>
        <ServiceCard />
      </div>
    </>
  );
}
