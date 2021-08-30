import Head from "next/head";
import Layout from "../components/core/layout";
import SEO from "../components/core/seo";
import { SEO_PROPS } from "../constants/seo";

export default function Home() {
  const { mainView } = SEO_PROPS;
  return (
    <>
      <SEO {...mainView} />
      <div>mainView</div>
    </>
  );
}
