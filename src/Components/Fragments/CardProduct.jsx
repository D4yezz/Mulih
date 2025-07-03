/* eslint-disable */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Button from "../Elements/Button";
import { useRef } from "react";
import { motion } from "framer-motion";

const isiCard = [
  {
    id: 1,
    img: "url('/Assets/perum_griya_asri.png')",
    title: "Perum Griya Asri",
    location: "Bogor, Jawa Barat",
    price: "$25,000",
    area: "360m Living Area",
  },
  {
    id: 2,
    img: "url('/Assets/perum_kencana_asri.png')",
    title: "Perum Kencana Asri",
    location: "Malang, Jawa Timur",
    price: "$35,000",
    area: "360m Living Area",
  },
  {
    id: 3,
    img: "url('/Assets/luxury.jpg')",
    title: "Perum Rakjel Elit",
    location: "Semarang, Jawa Tengah",
    price: "$22,000",
    area: "360m Living Area",
  },
  {
    id: 4,
    img: "url('/Assets/modern_cool.jpg')",
    title: "Perum Modern Cool",
    location: "Jakarta Selatan, Jakarta",
    price: "$55,000",
    area: "360m Living Area",
  },
  {
    id: 5,
    img: "url('/Assets/old_house.jpg')",
    title: "Perum Old Money",
    location: "Bandung, Jawa Barat",
    price: "$45,000",
    area: "360m Living Area",
  },
  {
    id: 6,
    img: "url('/Assets/simple_house.jpg')",
    title: "Perum Simple Miracle",
    location: "Denpasar, Bali",
    price: "$27,000",
    area: "360m Living Area",
  },
];

export function CardProduct() {
    const scrollRef = useRef(null);
  return (
    <>
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{}}
        viewport={{ root: scrollRef }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
      <Carousel className="mt-8 max-w-full md:mx-11 mx-7">
        <CarouselContent>
          {isiCard.map(function (produk) {
            return (
              <CarouselItem key={produk.id} className="lg:basis-1/3 md:basis-1/2">
                <Card key={produk.id} className="w-full md:p-5 p-2">
                  <CardHeader>
                    <div
                      className={` bg-cover bg-center w-full h-[230px]`}
                      style={{ backgroundImage: produk.img }}
                    ></div>
                  </CardHeader>
                  <CardContent className="py-4">
                    <CardTitle className="md:text-xl text-sm font-poppins">
                      {produk.title}
                    </CardTitle>
                    <CardDescription className="font-poppins md:text-sm text-[0.75rem]">
                      {produk.location}
                    </CardDescription>
                    <div className="flex mt-4">
                      <p className="text-mulih md:text-xl text-sm font-semibold font-poppins">
                        {produk.price}
                      </p>
                      <span className="ml-5 md:text-[0.8rem] text-xs font-rubik flex mt-1 text-slate-700 bg-slate-200 h-fit">{produk.area}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      text="Send Inquiry"
                      variant="bg-white text-mulih hover:bg-mulih hover:text-white hover:shadow-[0px_0px_10px_0px] hover:shadow-mulih ease-in-out transition duration-150 border-mulih border w-full"
                    />
                  </CardFooter>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </motion.div>
    </>
  );
}

