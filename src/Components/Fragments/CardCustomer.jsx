/* eslint-disable */
import { useRef } from "react";
import PingNotification from "../Elements/PingNotification";
import { Card, CardContent, CardHeader } from "../ui/card";
import { motion } from "framer-motion";

const testimonialCust = [
  {
    id: 1,
    title: "It proved to be exactly the kind of home we wanted.",
    desc: "We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.",
    imgUser: "../../../public/Assets/user_1.png",
    name: "Jaydon Aminoff",
    job: "UX Designer",
  },
  {
    id: 2,
    title: "Nobody knows Portland and the peninsula better than David.",
    desc: "My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland.",
    imgUser: "../../../public/Assets/user_2.png",
    name: "Alfredo Donin",
    job: "UI Designer",
  },
  {
    id: 3,
    title: "He keeps his client’s best interests in sharp focus",
    desc: "After working with David to sell my home in 2013, I was convinced that he’s the only realtor I’ll ever need. Since then, I’ve bought two properties and sold one.",
    imgUser: "../../../public/Assets/user_3.png",
    name: "Makenna Korsgaard",
    job: "UX Researcher",
  },
];

export default function CardCustomer() {
  const scrollRef = useRef(null);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{}}
        viewport={{ root: scrollRef }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="md:grid grid-cols-3 flex flex-col gap-6"
      >
        {testimonialCust.map(function (cust) {
          return (
            <Card key={cust.id} className="p-6 border rounded-none relative">
              <PingNotification />
              <CardHeader>
                <img
                  src="../../../public/Assets/double_quote.png"
                  alt=""
                  className="w-10 py-3 md:block hidden"
                />
                <h3 className="font-poppins md:text-[1.1rem] font-semibold text-blue-950 pb-4">
                  {cust.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-poppins font-normal md:text-[0.9rem] text-[0.7rem] pb-5">
                  {cust.desc}
                </p>
                <div className="flex">
                  <img src={cust.imgUser} alt="Photo Profil User" />
                  <div className="ml-4 flex flex-col justify-between">
                    <p className="font-poppins font-medium text-sm">
                      {cust.name}
                    </p>
                    <span className="font-poppins text-slate-400 md:text-[0.8rem] text-[0.7rem]">
                      {cust.job}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </motion.div>
    </>
  );
}
