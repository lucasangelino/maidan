import styles from "./article.module.css";
export default function Article({ title, content, readTime, topic }) {
  const { article, readtime, logo, article_content } = styles;
  return (
    <div className={article}>
      <div className={logo} style={{ backgroundColor: topic }}>
        Logo
      </div>
      <div className={article_content}>
        <p className={readtime}>Tiempo de lectura {readTime} aprox</p>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
