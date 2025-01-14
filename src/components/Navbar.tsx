import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const svg = (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="#42526B"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  return (
    <div className="md:py-[20px]  border-b border-b-[#1C0B451A] fixed bg-transparent w-full ">
      <div className="lg:w-[79.1vw] md:flex hidden w-[95vw] h-[40px]  justify-between mx-auto items-center  ">
        <div className=" md:block hidden text-[#121B26] text-[18px] font-semibold leading-[30px] ">
          SuperMetrics.com
        </div>
        <div className="md:block hidden">
          <ul className=" flex text-[#42526B] font-semibold text-[14px]  gap-[32px] ">
            <li className=" h-6 flex gap-2 items-center ">Feature {svg}</li>
            <li className=" h-6 flex gap-2 items-center ">Resources {svg}</li>
            <li className=" h-6 flex gap-2 items-center ">Company {svg}</li>
            <li className=" h-6 flex gap-2 items-center "> Pricing</li>
          </ul>
        </div>
        <div className=" w-[168px] md:flex hidden gap-[12px] h-[40px] ">
          <button className=" w-[73px] h-[40px] bg-transparent rounded-[8px] text-[14px] font-semibold text-[#212F40]  ">
            Log in
          </button>
          <button className=" w-[83px] h-[40px] bg-[#1B91F0] border border-[#1B91F0] text-[14px] font-semibold rounded-[12px] text-[#FFFFFF]  ">
            Sign up
          </button>
        </div>
      </div>
      <div className="relative">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 right-0 w-full min-h-[400px] backdrop-blur-md bg-white/30"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 md:hidden rounded-md hover:bg-gray-100"
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-6 h-6 text-gray-800" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-6 h-6 text-gray-800" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
              <motion.ul
                className="relative space-y-6 flex flex-col items-end w-[80vw] mx-auto pt-8 pb-12"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {[
                  { text: "Features", delay: 0 },
                  { text: "Resources", delay: 0.1 },
                  { text: "Company", delay: 0.2 },
                  { text: "Pricing", delay: 0.3 },
                ].map((item) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay }}
                    className="px-8 group"
                  >
                    <a
                      href="#"
                      className="relative text-xl font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-200"
                    >
                      {item.text}
                      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 md:hidden rounded-md hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
