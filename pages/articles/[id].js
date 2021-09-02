import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BackButton } from "../../components/ui/buttons";
import SEO from "../../components/core/seo";
import style from "./articlepage.module.css";
import { SEO_PROPS } from "../../constants/seo";

// TODO: Need to sanitize markdown content
// import rehypeRaw from 'rehype-raw'

const ARTICLE_ID = `cc7575d896207997960cb5430a4ebbe4aa7b16c8`;
const URL = `
    https://gist.githubusercontent.com/lucasangelino/4630aec21dd5a6f7371b5be51d6e94a3/raw/${ARTICLE_ID}/article.md`;

export default function Article(props) {
  const { article } = SEO_PROPS;

  const { article_content, image_cotainter } = style;
  const [articleContent, setArticleContent] = useState(null);

  const router = useRouter();

  if (router.isFallback) return "Loading...";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.text())
      .then((data) => setArticleContent(data));
  }, []);

  const handleBackClick = () => {
    router.push(`/`);
  };

  return (
    <>
      <SEO {...article} />
      <BackButton onclick={handleBackClick} />
      {article_content && (
        <div className={article_content}>
          <ReactMarkdown
            children={articleContent}
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
