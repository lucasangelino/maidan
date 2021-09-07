import Link from "next/link";
import { useRouter } from "next/router";
import { JavaScript, HTML, CSS, React, NodeJs } from "../icons/index";
import styles from "./article.module.css";

export default function Article({
  id,
  title,
  content,
  readTime,
  topic,
  icon,
  difficulty,
}) {
  const {
    article,
    readtime,
    logo,
    article_content,
    article_title,
    article_desc,
  } = styles;

  const router = useRouter();

  const getArticleIcon = (topic) => {
    const topicIcon = {
      react: <React height={50} />,
      javascript: <JavaScript height={50} />,
      nodejs: <NodeJs height={50} />,
      games: <JavaScript height={50} />,
      ia: <CSS height={50} />,
      misc: <HTML height={50} />,
    };
    return topicIcon[topic];
  };

  const handleArticleClick = (e) => {
    e.preventDefault();
    router.push(`/articles/[id]`, `/articles/${id}`);
  };

  return (
    <div className={article} onClick={handleArticleClick}>
      <div className={logo} style={{ backgroundColor: topic }}>
        {getArticleIcon(icon)}
      </div>
      <div className={article_content}>
        <p
          className={readtime}
        >{`Tiempo de lectura ${readTime} aprox - dificultad ${difficulty}`}</p>
        <h3 className={article_title}>{title}</h3>
        <p className={article_desc}>{content}</p>
      </div>
    </div>
  );
}
