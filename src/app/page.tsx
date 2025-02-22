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
        parrafo={"Egresado del Sena en producción de multimedia y vivo en Medellín. Apasionado por la tecnología y los videojuegos, soy una persona amable y con muy buen sentido del humor que le gusta trabajar en equipo, estar en constante crecimiento y aprender rápidamente, esforzarse para conseguir sus objetivos . Soy una persona que sabe escuchar y seguir consejos, soy creativo y propositivo en el momento de buscar soluciones a cualquier problema dado."}
      />
      <SkillSection/>
      <ExperienceBlock/>
    </>
  );
}

