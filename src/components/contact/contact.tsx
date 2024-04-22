import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiMailSendLine } from "react-icons/ri";

export default function Contact() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5581986735670";
  const linkedinLink =
    "https://www.linkedin.com/in/wallyson-gabriel-66947b1b7/";
  const emailLink = "mailto:wallysonwallyson@hotmail.com";

  const handleClick = (link: string | URL | undefined) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="flex p-5 gap-4 bg-zinc-400 text-[#E0E4E7]">
        <div className="flex flex-col">
          <h1 className="text-lg">Entre em contato!</h1>
          <p className="flex-[60%] text-xs">
            Tem alguma dúvida, proposta ou quer apenas mandar um oi?
            <br /> Sinta-se a vontade, eu terei o prazer em responder!
          </p>
        </div>
        <div className="border"></div>
        <ul className="flex flex-col items-start justify-center flex-[30%]">
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
        </ul>
      </div>
    </>
  );
}
