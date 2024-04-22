import Cispe from "../../assets/img/cispe.png";
import ComingSoon from "../../assets/img/comingSoon.jpg";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center justify-start py-10 px-4">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-4xl text-[#013440] font-bold">Projetos</h1>
          <div className="bg-zinc-400 rounded-lg">
            <img src={Cispe} alt="" className="rounded-t-lg" />
            <p className="p-4 text-justify text-[#E0E4E7]">
              O Centro de Inteligência na Saúde de Pernambuco, ou somente CISPE,
              é um projeto da Secretaria Estadual de Saúde e monitorado pela
              DGMOG (Diretoria Geral de Monitoramento e Gestão Estratégica) que
              visa integrar a tecnologia na saúde pública, entregar informações
              estratégicas à população e temas relevantes à saúde no Estado.
            </p>
          </div>
          <div className="bg-zinc-400 rounded-lg">
            <img src={ComingSoon} alt="" className="rounded-t-lg" />
            <p className="p-4 text-justify text-[#E0E4E7]">
              Aguarde, em breve estarei inserindo os demais projetos já
              finalizados!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
