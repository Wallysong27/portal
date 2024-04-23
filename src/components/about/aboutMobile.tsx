import Wally from "../../assets/img/perfil.jpg";

export default function AboutMobile() {

  return (
    <div className="flex lg:hidden flex-col gap-5 p-5">
      <div className="flex flex-col items-center gap-5">
        <img src={Wally} width={200} alt="" className="rounded-full" />
        <p className="text-center">
          Olá, eu me chamo Wallyson e sou formado em ciência da computação, abaixo você pode verificar minhas skills e nível de habilidade de cada uma delas.
        </p>
      </div>
    </div>
  );
}
