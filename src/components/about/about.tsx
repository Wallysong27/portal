import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Wally from "../../assets/img/perfil.jpg";
import AboutMobile from "./aboutMobile";
import TechSkills from "../techskills/techSkills";

export default function About() {

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { y: 300, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  const animationDelay = 1;

  const [isVisible, setIsVisible] = useState(false);
  const divControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && !isVisible) {
        setIsVisible(true);
        divControls.start({ width: [200, 900], transition: { duration: 2 } });
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [divControls, isVisible]);

  return (
    <>
      <div className="flex flex-col items-center justify-start h-screen gap-10 md:pb-10 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-20">
          <motion.div
            className="bg-gray-300 hidden lg:flex items-center border rounded-full"
            style={{
              cursor: "pointer",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
            }}
            initial={{ width: 200, height: 200 }}
            animate={divControls}
          >
            <img src={Wally} alt="" width={200} className="rounded-full" />
            {isVisible && (
              <motion.p
                className="px-10 text-xl"
                ref={ref}
                initial="hidden"
                variants={imageVariants}
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: animationDelay }}
              >
                Olá, eu me chamo Wallyson e sou formado em ciência da
                computação.
              </motion.p>
            )}
          </motion.div>
          <AboutMobile />
          <TechSkills />
        </div>
      </div>
    </>
  );
}
