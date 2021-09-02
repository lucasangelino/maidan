import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BackButton } from "../../components/ui/buttons";
import style from "./articlepage.module.css";

// TODO: Need to sanitize markdown content
// import rehypeRaw from 'rehype-raw'

export default function Article(props) {
  const { article_content, image_cotainter } = style;
  const [article, setArticle] = useState(null);
  const ARTICLE_ID = `cc7575d896207997960cb5430a4ebbe4aa7b16c8`;
  const URL = `
    https://gist.githubusercontent.com/lucasangelino/4630aec21dd5a6f7371b5be51d6e94a3/raw/${ARTICLE_ID}/article.md`;
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
          <ReactMarkdown
            children={article}
            components={{
              img: ({ node, ...props }) => {
                return (
                  <div className={image_cotainter} {...props}>
                    <Image
                      src={
                        "https://raw.githubusercontent.com/lucasangelino/maidan-img/main/imgs/react-toturial.png?token=AGX6FDQ5A7NUVPKKTYQCXITBHJSYA"
                      }
                      layout={`fill`}
                      alt={`Image`}
                    />
                  </div>
                );
              },
            }}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      )}
    </>
  );
}
