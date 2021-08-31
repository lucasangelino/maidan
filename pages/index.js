import Head from "next/head";
import Layout from "../components/core/layout";
import SEO from "../components/core/seo";
import Filters from "../components/ui/filters";
import Articles from "../components/ui/articles";
import { SEO_PROPS } from "../constants/seo";

const filters = [
  {
    title: "JS",
    style: "#fae207",
  },
  {
    title: "React",
    style: "#5ED3F3",
  },
  {
    title: "Games",
    style: "#AE5CF7",
  },
  {
    title: "IA",
    style: "#040F46",
  },
  {
    title: "Misc",
    style: "#ff7b00",
  },
  {
    title: "Node",
    style: "#7FC728",
  },
];

const articles = [
  {
    id: 1,
    title: "Tu primer App con ReactJs",
    content: "Creat una aplicacion con React en menos de 10 minutos...",
    readTime: "15 min",
    topic: "#fae207",
  },
  {
    id: 1,
    title: "Crea un servidor ultrarapido con NodeJs",
    content: "NodeJs nos permite crear servidores para nuestras aplica...",
    readTime: "15 min",
    topic: "#7FC728",
  },
  {
    id: 1,
    title: "5 Design Systems que deberias probar",
    content: "Algunos basicos, otros extensos y poderosos. Prueba estos...",
    readTime: "15 min",
    topic: "#ff7b00",
  },
  {
    id: 1,
    title: "React - create-react-app vs webpack app",
    content: "Pros y contras de crear apps con create-react-app vs webp...",
    readTime: "15 min",
    topic: "#fae207",
  },
  {
    id: 1,
    title: "El Juego de la Vida",
    content:
      "Un juego que esconde secretos del universo. El juego de 0 jugadores",
    readTime: "20 min",
    topic: "#AE5CF7",
  },
  {
    id: 1,
    title: "Github Copilot",
    content:
      "¿Inteligencia Artificial que programa? Skynet? Robots haciendo Robots?",
    readTime: "15 min",
    topic: "#040F46",
  },
];

export default function Home() {
  const { mainView } = SEO_PROPS;
  return (
    <>
      <SEO {...mainView} />
      <h4>Temas</h4>
      <Filters filters={filters} />
      <Articles articles={articles} />
    </>
  );
}
