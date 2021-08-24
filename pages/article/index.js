import Head from "next/head";
import SEO from "../../components/core/seo";
import { SEO_PROPS } from "../../constants/seo";

export default function Article() {
  const { article } = SEO_PROPS;
  return (
    <>
      <SEO {...article} title={"Another title"} />
      <div>Article</div>;
    </>
  );
}
