import Article from "./Article";
import styles from "./article.module.css";

export default function Articles({ articles }) {
  const { article_container } = styles;
  return (
    <div>
      <h1>Ultimos Articulos</h1>
      <div className={article_container}>
        {articles.map((article) => {
          const { id, title, content, readTime, topic, icon, difficulty } =
            article;
          return (
            <Article
              key={id}
              title={title}
              content={content}
              readTime={readTime}
              topic={topic}
              icon={icon}
              difficulty={difficulty}
            />
          );
        })}
      </div>
    </div>
  );
}
