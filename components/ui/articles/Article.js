import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./article.module.css";
export default function Article({ title, content, readTime, topic }) {
  const {
    article,
    readtime,
    logo,
    article_content,
    article_title,
    article_desc,
  } = styles;
  const router = useRouter();

  const handleArticleClick = (e) => {
    e.preventDefault();
    router.push(`/articles/[id]`, `/articles/${"id"}`);
  };
  return (
    <div className={article} onClick={handleArticleClick}>
      <div className={logo} style={{ backgroundColor: topic }}>
        Logo
      </div>
      <div className={article_content}>
        <p className={readtime}>Tiempo de lectura {readTime} aprox</p>
        <h3 className={article_title}>{title}</h3>
        <p className={article_desc}>{content}</p>
      </div>
    </div>
  );
}
