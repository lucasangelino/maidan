import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { BackButton } from "../../components/ui/buttons";

export default function Article(props) {
  const [article, setArticle] = useState(null);
  const URL =
    "https://gist.githubusercontent.com/lucasangelino/4630aec21dd5a6f7371b5be51d6e94a3/raw/acaa895aba14d4b5ef3975a3f33ad18dc700201b/article.md";
  const router = useRouter();
  if (router.isFallback) return "Loading...";

  useEffect(() => {
    console.log("useEffect");
    fetch(URL)
      .then((response) => response.text())
      .then((data) => setArticle(data));
  }, []);

  const handleBackClick = () => {
    router.push(`/`);
  };

  return (
    <>
      <BackButton onclick={handleBackClick} />
      <h1>Article</h1>
      {article && <ReactMarkdown children={article} />}
    </>
  );
}
