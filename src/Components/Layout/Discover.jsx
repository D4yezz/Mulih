/* eslint-disable */
import { useRef } from "react";
import Hsatu from "../Elements/Hsatu";
import { CardProduct } from "../Fragments/CardProduct";
import Recomendation from "../Fragments/Recomendation";
import { motion } from "framer-motion";

export default function Discover() {
  const scrollRef = useRef(null);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        animate={{}}
        viewport={{ root: scrollRef }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Hsatu text="Discover" />
        <Recomendation />
      </motion.div>
      <CardProduct />
    </>
  );
}
