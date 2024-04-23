import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import BgContact from "../../assets/img/bgContact.jpg";

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
          className="relative flex justify-evenly items-center w-full min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${BgContact})` }}
        >
          <div className="md:flex-1"></div>
          <div className="flex items-center justify-center md:flex-1 p-5">
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
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 backdrop-blur backdrop-filter py-4">
            <p className="text-[#E0E4E7] text-center">© Wallyson Araújo 2024</p>
          </div>
        </div>
      </div>
    </>
  );
}
