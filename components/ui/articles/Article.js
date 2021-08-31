import styles from "./article.module.css";
export default function Article({ title, content, readTime }) {
  const { article, readtime, logo, article_content } = styles;
  return (
    <div className={article}>
      <div className={logo}>Logo</div>
      <div className={article_content}>
        <p className={readtime}>Tiempo de lectura {readTime} aprox</p>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
