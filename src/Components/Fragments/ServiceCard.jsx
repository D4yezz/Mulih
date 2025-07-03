/* eslint-disable */
import { useRef } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { motion } from "framer-motion";

const kontenCard = [
  {
    id: 1,
    img: "public/assets/Heart.svg",
    title: "Comfortable",
    desc: "Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.",
  },
  {
    id: 2,
    img: "public/assets/shield.svg",
    title: "Extra Security",
    desc: "You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.",
  },
  {
    id: 3,
    img: "public/assets/star.svg",
    title: "Luxury",
    desc: "Find out how we provide the highest standard of professional property management to give you all the benefits of property.",
  },
  {
    id: 4,
    img: "public/assets/ticket.svg",
    title: "Best Price",
    desc: "Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home.",
  },
  {
    id: 5,
    img: "public/assets/location.svg",
    title: "Strategic Location",
    desc: "located in the city center close to the shopping center. Very good for areas surrounded by international education centers, start-up office centers.",
  },
  {
    id: 6,
    img: "public/assets/graph.svg",
    title: "Efficient",
    desc: "Schedule visits to multiple properties at once in one day without having to call them one by one. Check everything and find the best properties for rent.",
  },
];

export default function ServiceCard() {
  const scrollRef = useRef(null);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{}}
        viewport={{ root: scrollRef }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="md:grid  grid-cols-3 flex flex-col gap-4 mx-3"
      >
        {kontenCard.map(function (konten) {
          return (
            <Card
              key={konten.id}
              className="border-none bg-transparent flex flex-col justify-center"
            >
              <CardHeader>
                <img src={konten.img} alt="" className="w-10 md:mx-0 mx-auto" />
              </CardHeader>
              <CardContent className="text-center md:text-left">
                <h3 className="font-poppins text-xl font-bold text-blue-950 my-2">
                  {konten.title}
                </h3>
                <p className="font-poppins text-slate-500 text-[0.9rem] max-w-[300px]">
                  {konten.desc}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </motion.div>
    </>
  );
}
