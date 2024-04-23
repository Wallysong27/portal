import Wallyson from "../../assets/img/perfil.jpg";
// import { useState, useEffect } from "react";
// import { TbMenuDeep } from "react-icons/tb";
// import { motion } from "framer-motion";

export default function Navbar() {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [isAnimating, setIsAnimating] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  // useEffect(() => {
  //   if (isAnimating) {
  //     setTimeout(() => {
  //       setIsAnimating(false);
  //     }, 300);
  //   }
  // }, [isAnimating]);

  return (
    <>
      <nav>
        <div className="fixed w-full flex items-center justify-around lg:justify-between border-b shadow-lg py-2 lg:px-20 backdrop-filter backdrop-blur-3xl z-[10000] bg-black bg-opacity-50 text-[#E0E4E7] lg:py-5 px-6 xl:px-40 gap-10 2xl:gap-20">
          <div className="flex items-center gap-3">
            <img
              src={Wallyson}
              alt="logo"
              className="rounded-full bg-zinc-300 w-[50px] h-[50px]"
            />
            <span className="tracking-wider lg:text-xl font-bold duration-300 hover:text-[#013440] cursor-pointer">
              WALLYSON ARAUJO
            </span>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex gap-5 text-lg">
              <li className="duration-300 hover:text-[#013440] cursor-pointer hover:border-b hover:border-[#013440]">
                HOME
              </li>
              <li className="duration-300 hover:text-[#013440] cursor-pointer hover:border-b hover:border-[#013440]">
                SOBRE
              </li>
              <li className="duration-300 hover:text-[#013440] cursor-pointer hover:border-b hover:border-[#013440]">
                PROJETOS
              </li>
              <li className="duration-300 hover:text-[#013440] cursor-pointer hover:border-b hover:border-[#013440]">
                CONTATO
              </li>
            </ul>
          </div>
          {/* <div className="flex lg:hidden" onClick={toggleMenu}>
            <TbMenuDeep />
          </div> */}
        </div>
        {/* {menuOpen && (
          <motion.div
            className="flex items-center justify-center lg:hidden absolute top-16 left-0 right-0 shadow-lg py-2 z-[1000] bg-zinc-600"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8, staggerChildren: 0.1 }}
              className="w-2/5 flex flex-col items-center justify-center"
            >
              <li className="pb-3 border-b w-full text-center text-white border-zinc-300">
                HOME
              </li>
              <li className="py-3 border-b w-full text-center text-white border-zinc-300">
                ABOUT ME
              </li>
              <li className="py-3 border-b w-full text-center text-white border-zinc-300">
                PROJECTS
              </li>
              <li className="py-3 text-white">CONTACT</li>
            </motion.ul>
          </motion.div>
        )} */}
      </nav>
    </>
  );
}
