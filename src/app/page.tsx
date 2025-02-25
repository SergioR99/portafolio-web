import HeaderPage from "./components/Header";
import AboutSection from "./components/About";
import SkillSection from "./components/Skills";
import ExperienceBlock from "./components/Experience";
import Preloader from "./components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <HeaderPage />
      <AboutSection 
        title={"Sergio Rendon V."}
        subtitle={"Desarrollador Front-end"}
        parrafo={"Soy un desarrollador frontend apasionado por aprender de los demás y compartir mis conocimientos. Me encanta salir de mi zona de confort y enfrentar nuevos desafíos, lo que me permite crecer tanto profesional como personalmente."}
        parrafo2={"Disfruto trabajar en equipo, ya que creo que la colaboración es clave para lograr grandes resultados. Además, soy divertido y sociable, lo que hace que el ambiente de trabajo sea más ameno y productivo."}
      />
      <SkillSection/>
      <ExperienceBlock/>
    </>
  );
}

