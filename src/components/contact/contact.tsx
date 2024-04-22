import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Bg from "../../assets/img/bg.jpg";

export default function Contact() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5581986735670";
  const linkedinLink =
    "https://www.linkedin.com/in/wallyson-gabriel-66947b1b7/";
  const emailLink = "mailto:wallysonwallyson@hotmail.com";
  const instagramLink = "https://www.instagram.com/_wall.ex/";

  const handleClick = (link: string | URL | undefined) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div>
        <div
          className="flex justify-evenly items-center w-full min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <div className="flex-1"></div>
          <div className="flex items-center justify-center flex-1">
            <div className="flex flex-col items-start justify-center gap-5 bg-[#E0E4E7] text-[#013440] p-10 rounded-xl h-[500px]">
              <h1 className="text-5xl font-bold">Entre em Contato!</h1>
              <p>
                Tem alguma dúvida, proposta ou quer apenas mandar um oi?
                <br />
                Sinta-se a vontade, eu terei o prazer em responder!
              </p>
              <ul className="flex justify-between items-center w-full">
                <li
                  className="flex items-center justify-center gap-3 cursor-pointer w-8 h-8"
                  onClick={() => handleClick(whatsappLink)}
                >
                  <FaWhatsapp className="w-full h-full" />
                </li>
                <li
                  className="flex items-center justify-center gap-3 cursor-pointer w-8 h-8"
                  onClick={() => handleClick(linkedinLink)}
                >
                  <FaLinkedin className="w-full h-full" />
                </li>
                <li
                  className="flex items-center justify-center gap-3 cursor-pointer w-8 h-8"
                  onClick={() => handleClick(instagramLink)}
                >
                  <FaInstagram className="w-full h-full" />
                </li>
                <li
                  className="flex items-center justify-center gap-3 cursor-pointer w-8 h-8"
                  onClick={() => handleClick(emailLink)}
                >
                  <MdEmail className="w-full h-full" />
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="flex flex-col gap-3">
          <h1 className="text-lg md:text-5xl text-[#013440]">
            Entre em contato!
          </h1>
          <p className="text-xs md:text-base text-[#E0E4E7]">
            Tem alguma dúvida, proposta ou quer apenas mandar um oi?
            <br /> Sinta-se a vontade, eu terei o prazer em responder!
          </p>
        </div>
        <ul className="flex flex-col items-start justify-center text-[#E0E4E7]">
          <li
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => handleClick(whatsappLink)}
          >
            <FaWhatsapp />
            WhatsApp
          </li>
          <li
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => handleClick(linkedinLink)}
          >
            <CiLinkedin />
            LinkedIn
          </li>
          <li
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => handleClick(emailLink)}
          >
            <RiMailSendLine />
            E-mail
          </li>
        </ul> */}
        </div>
      </div>
    </>
  );
}
