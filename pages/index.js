import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/core/layout";
import SEO from "../components/core/seo";
import Filters from "../components/ui/filters";
import Articles from "../components/ui/articles";
import { SEO_PROPS } from "../constants/seo";
import { articles } from "../constants/content";

export default function Home() {
  const { mainView } = SEO_PROPS;

  const [latestArticles, setLatestArticles] = useState([]);

  const URL = `http://localhost:5001/api/articles/latest`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setLatestArticles(data));
  }, [URL]);

  return (
    <>
      <SEO {...mainView} />
      <h4>Temas</h4>
      <Articles articles={latestArticles} />
    </>
  );
}
