import Head from "next/head";
import Layout from "../components/core/layout";
import SEO from "../components/core/seo";
import Filters from "../components/ui/filters";
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

export default function Home() {
  const { mainView } = SEO_PROPS;
  return (
    <>
      <SEO {...mainView} />
      <h4>Temas</h4>
      <Filters filters={filters} />
    </>
  );
}
