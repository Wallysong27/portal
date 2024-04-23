import Wallyson from "../../assets/img/perfil.jpg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbMenuDeep } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const scrollToSection = (
    sectionId: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault(); // Evita que o navegador siga o link imediatamente
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Fechar o menu após clicar no link
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <div className="fixed w-full flex items-center justify-around lg:justify-between border-b shadow-lg py-2 lg:px-20 backdrop-filter backdrop-blur-3xl z-40 bg-black bg-opacity-50 text-[#E0E4E7] lg:py-5 px-6 xl:px-40 gap-10 2xl:gap-20 h-20">
          <div className="flex xl:hidden items-center gap-3">
            <img
              src={Wallyson}
              alt="logo"
              className="rounded-full bg-zinc-300 w-[50px] h-[50px]"
            />
            <span className="tracking-wider lg:text-xl font-bold duration-300 hover:text-[#013440] cursor-pointer">
              WALLYSON ARAUJO
            </span>
          </div>
          {!isDesktop && (
            <button className="w-10 h-10" onClick={toggleMenu}>
              <TbMenuDeep className="w-full h-full text-[#E0E4E7]" />
            </button>
          )}
          {isDesktop && (
            <div className="hidden lg:flex items-center justify-evenly w-full">
              <ul className="flex items-center justify-evenly gap-5 text-lg w-full">
                <li className="flex items-center justify-center gap-5">
                  <img
                    src={Wallyson}
                    alt=""
                    className="rounded-full w-[50px] h-[50px]"
                  />
                  <span className="tracking-wider lg:text-xl font-bold duration-300 hover:text-[#013440] cursor-pointer">
                    WALLYSON ARAUJO
                  </span>
                </li>
                <li className="duration-300 hover:text-[#013440] cursor-pointer hover:border-b hover:border-[#013440]">
                  <a href="#home" onClick={(e) => scrollToSection("home", e)}>
                    HOME
                  </a>
                </li>
                <li className="duration-300 hover:text-[#013440] cursor-pointer hover:border-b hover:border-[#013440]">
                  <a href="#about" onClick={(e) => scrollToSection("about", e)}>
                    SOBRE
                  </a>
                </li>
                <li className="duration-300 hover:text-[#013440] cursor-pointer hover:border-b hover:border-[#013440]">
                  <a
                    href="#projects"
                    onClick={(e) => scrollToSection("projects", e)}
                  >
                    PROJETOS
                  </a>
                </li>
                <li className="duration-300 hover:text-[#013440] cursor-pointer hover:border-b hover:border-[#013440]">
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection("contact", e)}
                  >
                    CONTATO
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <AnimatePresence>
          {(menuOpen || (isDesktop && menuOpen)) && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-full bg-black bg-opacity-75 z-50"
              onClick={toggleMenu}
            >
              <div className="fixed top-0 bottom-0 right-0 bg-white w-11/12 shadow-lg rounded-l-2xl">
                {!isDesktop && (
                  <button className="absolute top-4 right-2 w-14 h-14">
                    <IoIosClose className="w-full h-full" />
                  </button>
                )}
                {!isDesktop && (
                  <ul className="absolute top-28 left-4 text-sm w-10/12 flex flex-col gap-10 text-[#013440]">
                    <li className="border-b pb-2 font-bold">
                      <a
                        href="#home"
                        onClick={(e) => scrollToSection("home", e)}
                      >
                        HOME
                      </a>
                    </li>
                    <li className="border-b pb-2 font-bold">
                      <a
                        href="#about"
                        onClick={(e) => scrollToSection("about", e)}
                      >
                        SOBRE
                      </a>
                    </li>
                    <li className="border-b pb-2 font-bold">
                      <a
                        href="#projects"
                        onClick={(e) => scrollToSection("projects", e)}
                      >
                        PROJETOS
                      </a>
                    </li>
                    <li className="font-bold">
                      <a
                        href="#contact"
                        onClick={(e) => scrollToSection("contact", e)}
                      >
                        CONTATO
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
