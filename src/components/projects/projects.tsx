import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import BgCispe from "../../assets/img/projetos/bg-cispe.png";
import BgDgmog from "../../assets/img/projetos/bg-dgmog.png";

interface ProjectsProps {
  sectionId: string;
}

export default function Projects(props: ProjectsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const cispeLink = "https://cispe.saude.pe.gov.br/";

  const handleClick = (link: string | URL | undefined) => {
    window.open(link, "_blank");
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { y: 300, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.1,
      },
    },
  };

  const animationDelay = 1;

  return (
    <div id={props.sectionId}>
      <motion.div
        className="flex flex-col items-center justify-center md:justify-start pt-40 pb-20 px-4 gap-10 min-h-screen"
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: animationDelay }}
      >
        <h1 className="text-4xl text-[#013440] font-bold">Meus projetos</h1>
        <div className="flex flex-col lg:flex-row gap-10 curso">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick(cispeLink)}
            className="cursor-pointer"
          >
            <img src={BgCispe} alt="" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
            className="cursor-pointer"
          >
            <img src={BgDgmog} alt="" />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            key="modal"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white w-10/12 md:w-1/2 h-[200px] rounded-3xl flex flex-col items-center justify-center relative"
            >
              <span
                className="absolute top-4 right-4 cursor-pointer"
                onClick={closeModal}
              >
                X
              </span>
              <h1 className="font-bold text-3xl text-[#013440]">
                Portal DGMOG
              </h1>
              <p className="text-lg font-semibold text-[#013440] text-center">
                Este projeto ainda não foi finalizado. Por favor, aguarde.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
