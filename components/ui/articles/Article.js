import styles from "./article.module.css";
export default function Article({ title, content, readTime }) {
  const { article, readtime } = styles;
  return (
    <div className={article}>
      <p className={readtime}>Tiempo de lectura {readTime} aprox</p>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
