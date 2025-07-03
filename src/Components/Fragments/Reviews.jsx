/* eslint-disable */
import { useRef } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { motion } from "framer-motion";

export default function ReviewsAtas() {
  const scrollRef = useRef(null);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{root: scrollRef}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="border-none rounded-none w-fit h-fit md:ml-20 md:-mt-24 shadow-[0px_12px_25px_rgba(0,0,0,0.25)]">
          <CardHeader className="flex items-center justify-center flex-col">
            <img
              src="/assets/check_square.svg"
              alt=""
              className="md:w-6 w-4 md:mb-2"
            />
            <h1 className="font-rubik md:text-6xl text-2xl text-blue-950">
              4.8
            </h1>
          </CardHeader>
          <CardContent className="flex items-center justify-center flex-col">
            <img
              src="/assets/grupStar.png"
              alt=""
              className="md:w-20 w-16 md:my-3 my-1"
            />
            <p className="text-slate-400 md:text-sm text-xs py-1">Trusted On</p>
            <p className="text-blue-950 font-poppins md:text-sm text-xs">
              500+ Reviews
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}

export function ReviewsBawah() {
  const scrollRef = useRef(null);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white w-full md:w-fit h-fit md:p-4 p-2 flex items-center md:justify-center justify-between md:gap-8 gap-2 absolute bottom-0 right-0"
      >
        <div className="flex items-center justify-center font-poppins">
          <h1 className="md:text-4xl text-xl text-blue-950 font-medium">
            250+
          </h1>
          <p className="text-slate-400 md:text-sm text-xs ml-2">
            Property
            <br />
            Sale
          </p>
        </div>
        <div className="flex items-center justify-center font-poppins">
          <h1 className="md:text-4xl text-xl text-blue-950 font-medium">
            550+
          </h1>
          <p className="text-slate-400 md:text-sm text-xs ml-2">
            Apartemen
            <br />
            Rent
          </p>
        </div>
      </motion.div>
    </>
  );
}
