import Wallyson from "../../assets/img/wallyson.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center h-screen bg-zinc-400 text-white">
        <div className="relative flex items-center justify-center flex-[65%] md:flex-1">
          <div className="flex flex-col p-4">
            <h1 className="text-4xl font-bold text-[#013440]">Desenvolvedor Front-End</h1>
            <p className="text-[#E0E4E7] font-semibold">
              Especializado em React.js, TypeScript, JavaScript, HTML, CSS e
              Tailwind CSS.
            </p>
            <div className="absolute bottom-0 md:top-52 left-1/2 transform -translate-x-1/2 flex gap-10 w-full p-4 items-center justify-center">
              <span className="text-xs md:text-base w-20 md:w-1/2 text-[#E0E4E7]">
                Comprometido com a otimização da usabilidade e desempenho,
              </span>
              <span className="text-xs md:text-base w-20 md:w-1/2 text-[#E0E4E7]">
                buscando inovações para fornecer interfaces de qualidade.
              </span>
            </div>
          </div>
        </div>
        <div className="flex-[35%] md:flex-none p-10 relative md:w-80">
          {" "}
          <div className="relative after:absolute after:w-full after:h-full after:top-4 after:left-4 after:outline outline-white z-10">
            {" "}
            <img src={Wallyson} alt="" className="relative z-20" />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
