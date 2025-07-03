/* eslint-disable */
import { useRef, useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const scrollRef = useRef(null);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1,y:0 }}
        animate={{  }}
        viewport={{ root:scrollRef }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-20 w-full bg-slate-100/90 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200  lg:backdrop-blur-sm lg:after:hidden"
      >
        <div className="relative md:mx-auto px-4 w-full ">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] justify-between font-medium "
            role="navigation"
          >
            <a
              aria-current="page"
              className="flex items-center py-3  focus:outline-none "
              href="#home"
            >
              <img
                src="../../../public/Assets/logo_text.png"
                alt=""
                className="w-24"
              />
            </a>
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-mulih transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-mulih transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-mulih transition-all duration-300"
                ></span>
              </div>
            </button>
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute font-poppins text-slate-500 left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-slate-100/80 px-8 pb-12 pt-24 gap-8 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-mulih  focus:outline-none focus-visible:outline-none "
                  href="#home"
                >
                  <span>Home</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-mulih focus:outline-none focus-visible:outline-none "
                  href="#property"
                >
                  <span>Property</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-mulih focus:text-emerald-600 focus:outline-none focus-visible:outline-none "
                  href="#about-us"
                >
                  <span>About</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-mulih focus:text-emerald-600 focus:outline-none focus-visible:outline-none "
                  href="#service"
                >
                  <span>Service</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-mulih focus:text-emerald-600 focus:outline-none focus-visible:outline-none "
                  href="#contact"
                >
                  <span>Contact</span>
                </a>
              </li>
              <li className="flex md:hidden items-center justify-around font-poppins w-full mt-4">
                <Button text="Sign in" variant="bg-transparent text-mulih" />
                <Button text="Login" variant="bg-mulih text-white" />
              </li>
            </ul>
            <div className="lg:flex hidden items-center justify-between font-poppins ">
              <Button
                text="Sign in"
                variant="bg-slate-100 text-mulih w-fit h-fit"
              />
              <Button text="Login" variant="bg-mulih text-white w-fit h-fit" />
            </div>
          </nav>
        </div>
      </motion.header>
    </>
  );
}
