import Wallyson from "../../assets/img/wallyson.png";
import Skills from "../skills/skills";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center md:items-center h-screen bg-zinc-400 text-white">
        <div className="flex flex-col md:flex-row items-center justify-around lg:justify-evenly w-full">
          <div className="relative flex items-center justify-center flex-[65%] md:flex-none">
            <div className="flex flex-col p-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#013440]">
                Desenvolvedor <br />Front-End
              </h1>
              <p className="text-[#E0E4E7] font-semibold">
                Especializado em React.js, TypeScript,<br /> JavaScript, HTML, CSS e
                Tailwind CSS.
              </p>
            </div>
          </div>
          <div className="flex-[35%] md:flex-none p-10 relative w-80">
            {" "}
            <div className="relative after:absolute after:w-full after:h-full after:top-4 after:left-4 after:outline outline-white z-10">
              {" "}
              <img src={Wallyson} alt="" className="relative z-20 w-full" />{" "}
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </>
  );
}
