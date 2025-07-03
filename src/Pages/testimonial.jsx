/* eslint-disable */
import CardCustomer from "@/Components/Fragments/CardCustomer";
import Hsatu from "../Components/Elements/Hsatu";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Testimonial() {
  const scrollRef = useRef(null);
  return (
    <>
      <div className="md:px-20 px-8 py-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          animate={{}}
          viewport={{ root: scrollRef }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Hsatu text="Customer Testimonial" />
          <div className="flex md:flex-row flex-col md:justify-between justify-center items-center py-10">
            <h1 className="font-rubik md:text-4xl text-3xl md:text-left text-center max-w-[240px] md:max-w-fit font-semibold text-blue-950">
              People say about us?
            </h1>

            <button className="flex font-poppins text-mulih items-center md:justify-between justify-start md:mt-0 mt-4">
              Learn More
              <img
                src="public/assets/arrow_right_circle.svg"
                alt=""
                className="w-6 ml-2 rounded-full shadow-[0px_0px_10px_0px] shadow-mulih"
              />
            </button>
          </div>
        </motion.div>
        <CardCustomer />
      </div>
    </>
  );
}
