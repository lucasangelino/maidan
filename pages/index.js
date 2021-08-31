import Head from "next/head";
import Layout from "../components/core/layout";
import SEO from "../components/core/seo";
import Filters from "../components/ui/filters";
import { SEO_PROPS } from "../constants/seo";

const filters = [
  {
    title: "Javascript",
  },
  {
    title: "React",
  },
];

export default function Home() {
  const { mainView } = SEO_PROPS;
  return (
    <>
      <SEO {...mainView} />
      <Filters filters={filters} />
    </>
  );
}
