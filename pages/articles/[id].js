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

const ARTICLE_ID = `850cb6b1ea204708ad616834dd5a150718c9d0fb`;
const URL = `http://localhost:5001/api/article`;

export default function Article(props) {
  const { article } = SEO_PROPS;

  const { article_content, image_cotainter, article_container } = style;
  const [articleContent, setArticleContent] = useState(null);

  const router = useRouter();
  const { id } = router.query;
  if (router.isFallback) return "Loading...";

  useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setArticleContent(data.content));
  }, []);

  const handleBackClick = () => {
    router.push(`/`);
  };

  return (
    <>
      <div className={article_container}>
        <SEO {...article} />
        <BackButton onclick={handleBackClick} />
        {articleContent && (
          <div className={article_content}>
            <ReactMarkdown
              children={articleContent}
              components={{
                img: ({ node, ...props }) => {
                  return (
                    <div className={image_cotainter} {...props}>
                      <img src={`${node.properties.src}`} alt={"Image"} />
                    </div>
                  );
                },
              }}
              remarkPlugins={[remarkGfm]}
            />
          </div>
        )}
      </div>
    </>
  );
}
