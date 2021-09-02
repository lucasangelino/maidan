import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BackButton } from "../../components/ui/buttons";
import style from "./articlepage.module.css";

// TODO: Need to sanitize markdown content
// import rehypeRaw from 'rehype-raw'

export default function Article(props) {
  const { article_content } = style;
  const [article, setArticle] = useState(null);
  const URL =
    "https://gist.githubusercontent.com/lucasangelino/4630aec21dd5a6f7371b5be51d6e94a3/raw/12f0fb93f204b37571ec9b60e1d0828da969a168/article.md";
  const router = useRouter();
  if (router.isFallback) return "Loading...";

  useEffect(() => {
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
      {article && (
        <div className={article_content}>
          <ReactMarkdown children={article} remarkPlugins={[remarkGfm]} />
        </div>
      )}
    </>
  );
}
